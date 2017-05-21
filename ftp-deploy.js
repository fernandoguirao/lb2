/*
 * Script to deploy files via FTP.
 *
 * Usage: node ftp-deploy.js deploy.secret.conf.json
 *
 * A config file is needed to get FTP server options.
 *    - Create 'deploy.secret.conf.json' with following properties:
      {
       "host": "landbot.io/test",
       "user": "myuser",
       "pass": "mypass",
       "removes": [],
       "includes": [],
       "remoteBaseDir": "./",
       "localBaseDir": "./"
      }
      - Add this file to .gitignore in order to keep it secret
 */

// First, load selected file
let configFile = process.argv[2];

if (!configFile || configFile === '') {
  console.error(`
A config file must be given to make deploy via ftp. Example:
    node ftp-deploy.js myconf.secret.conf.json
    `);
  process.exit(1);
}

let config = {};
try {
   config = require(`./${configFile}`);
} catch(e) {
  console.error(`
File not found: '${configFile}'
    Create a file '*.secret.conf.json' with following structure:
    ---
    {
      "host": "landbot.io/test",
      "user": "myuser",
      "pass": "mypass",
      "removes": [],
      "includes": [],
      "remoteBaseDir": "./",
      "localBaseDir": "./"
    }
    ---
    Don't forget to add it to the .gitignore file
    `);
  process.exit(1);
}

if (!config.host || !config.user || !config.pass) {
  console.error(`
Error: FTP server options missing.
    Please, check "${configFile}" > 'host', 'user' and 'pass' properties.
    `);
  process.exit(1);
}

const series = require('async/series');
const Ftp = require('jsftp');
const ftp = new Ftp({
  host: config.host,
  user: config.user,
  pass: config.pass
});

const RBASEDIR = config.remoteBaseDir || '';
const LBASEDIR = config.localBaseDir || '';

/**
 * Auth task. Uses 'host', 'user', 'pass' options
 * @return {Promise}
 */
function authentication() {
  return new Promise((resolve, reject) => {
    ftp.auth(config.user, config.pass, (err, res) => {
      if (err) {
        console.error(err);
        reject();
      } else {
        console.log(res.text);
        resolve();
      }
    });
  });
}

/**
 * Remove task. Iterates through 'removes' option
 * @return {Promise}
 */
function removing() {
  return new Promise((resolve, reject) => {
    let promises = [];
    if (config.removes && config.removes.length > 0) {
      console.log('REMOVING FILES >');
      let _removes = config.removes;

      // Iterate remove files
      for (let i = 0; i < _removes.length; i++) {
        let _target = `${RBASEDIR}${_removes[i]}`;
        console.log(`   Removing: ${_target}`);
        let data = { target: _target };
        promises.push(
          createPromise('dele', data)
        );
      }
      // When all files removed, resolve promise
      Promise.all(promises).then(() => {
        resolve();
      });

    } else {
      // No files to be removed
      resolve();
    }
  });
}

/**
 * Upload task. Iterates through 'includes' option
 * @return {Promise}
 */
function uploading() {
  return new Promise((resolve, reject) => {
    let promises = [];
    if (config.includes && config.includes.length > 0) {
      console.log('UPLOADING FILES >');
      let _includes = config.includes;
      for (let i = 0; i < _includes.length; i++) {

        let _source = `${LBASEDIR}${_includes[i].file}`;
        let _dest = `${RBASEDIR}${_includes[i].file}`;
        if (_includes[i].rename) {
          _dest = `${RBASEDIR}${_includes[i].rename}`;
        }

        console.log(`   Uploading: ${_source} -> ${_dest}`);
        let data = { source: _source, dest: _dest };
        promises.push(
          createPromise('put', data)
        );
      }
      // Each promise (upload) is executed one by one [ftp one connection restriction]
      series(promises, () => { resolve(); });
    } else {
      // No files to be uploaded
      resolve();
    }
  });
}

/**
 * Disconnects FTP client
 * @return {Promise}
 */
function quit() {
  return new Promise((resolve, reject) => {
    ftp.raw.quit((err, res) => {
      if (err) {
        console.error(err);
      }
      resolve();
    });
  });
}

/**
 * Creates a promise of given type
 * @param  {String} type Type of promise: 'dele' | 'put'
 * @param  {Object} data Needed options
 * @return {Promise}
 */
function createPromise(type, data) {
  if (type === 'dele') {

    if (!data.target) return Promise.resolve();

    return new Promise((resolve, reject) => {
      ftp.raw('dele', data.target, (err, res) => {
        if (err) {
          console.error(`   [${err.code}] File "${data.target}" not found.`);
        } else {
          console.log(`   [${res.code}] Removed: ${data.target}.`);
        }
        resolve();
      });
    });

  } else if (type === 'put') {

    if (!data.source || !data.dest) return Promise.resolve();

    // Use async/series instead of Promise
    return function(callback) {
      ftp.put(data.source, data.dest, (err) => {
        if (err) {
          console.error(`   [${err.code}] Error uploading ${data.source}`);
        } else {
          console.log(`   [200] Upload complete: ${data.dest}.`);
        }
        callback();
      });
    }

  }
  return Promise.resolve();
}


/**
 * Main script flow:
 * > Authentication > Remove files > Upload files > Exit
 */
authentication().then(
  () => {
    removing().then(
      () => {
        uploading().then(
          () => {
            quit();
            console.log(`Deploy to '${config.host}': SUCCESS`);
          },
          (reason) => {
            // Upload failed.
            console.error(`Upload failed. Reason: ${reason}`);
          }
        );
      },
      (reason) => {
        // Removes failed.
        console.error(`Removing failed. Reason: ${reason}`);
      }
    );
  },
  (reason) => {
    // Auth failed.
    console.error(`Auth failed. Reason: ${reason}`);
  }
);
