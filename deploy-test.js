/*
 * Script to deploy files via FTP.
 *
 * A config file is needed to get FTP server options.
 *    - Create 'ftp-test-config.json' with following properties:
      {
       "host": "landbot.io/test",
       "user": "myuser",
       "pass": "mypass",
       "removes": [],
       "includes": [],
       "remoteBaseDir": "./",
       "localBaseDir": "./"
      }
 */

let config = {};

try {
   config = require('./ftp-test-config.json');
} catch(e) {
  console.log(`
File not found: 'ftp-test-config.json'
    Create a file 'config.json' in this directory with following structure:
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
    `);
  process.exit(1);
}

if (!config.host || !config.user || !config.pass) {
  console.log(`
Error: FTP server options missing.
    Please, check "ftp-config.json" > 'host', 'user' and 'pass' properties.
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

        let _source = `${LBASEDIR}${_includes[i]}`;
        let _dest = `${RBASEDIR}${_includes[i]}`;

        if (_includes[i] === 'index.test.html') {
          // SPECIAL UPLOAD
          _dest = `${RBASEDIR}index.html`;
        }

        console.log(`   Uploading: ${_source} -> ${_dest}`);
        let data = { source: _source, dest: _dest };
        promises.push(
          createPromise('put', data)
        );
      }
      series(promises, () => { resolve(); });

      // Promise.all(promises).then(() => {
      //   resolve();
      // });
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
      } else {
        console.log('Success. Bye!');
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

    // // Using Promise here throw connection errors
    // return new Promise((resolve, reject) => {
    //   ftp.put(data.source, data.dest, (err) => {
    //     if (err) {
    //       console.error(`   [${err.code}] Error uploading ${data.source}`);
    //     } else {
    //       console.log(`   [200] Upload complete: ${data.dest}.`);
    //     }
    //     resolve();
    //   })
    // });

  }
  return Promise.resolve();
}

// MAIN SCRIPT
authentication().then(
  () => {
    removing().then(
      () => {
        uploading().then(
          () => {
            quit();
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
