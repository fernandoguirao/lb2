const gulp = require('gulp');
const path = require('./package.json').path;
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const merge = require('merge-stream');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const $ = require('gulp-load-plugins')({
  pattern: ['*'],
  scope: ['devDependencies']
});
const clientName = require('./package.json').client;
let client;

try {
  client = require(`./clients/${clientName}.conf.json`);
} catch(e) {
  console.error(`[ERROR]: "./clients/${clientName}.conf.json" file not found`);
  process.exit(1);
}


/****** SCRIPTS ******/
gulp.task('scripts', () =>
  gulp.src([
    `${path.app.js}**/*.js`
  ])
    .pipe($.sourcemaps.init())
    .pipe($.concat('master.js'))
    .pipe($.uglify())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(`${path.dist.js}`))
);
gulp.task('js-browser-sync', ['scripts'], (done) => {
  browserSync.reload();
  done();
});

/****** STYLES ******/
gulp.task('styles', () => {
  // Processors
  let processors = [ autoprefixer/*, cssnano({zindex: false})*/ ];

  // master.css
  let master = gulp.src([
    `${path.app.scss}master/master.scss`
  ])
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      sourceComments: 'map'
    }).on('error', $.sass.logError))
    .pipe($.postcss( processors ))
    .pipe($.sourcemaps.write('./'), {
			destPath: `${path.dist.css}`
		})
    .pipe(gulp.dest(`${path.dist.css}`))
    .pipe(browserSync.stream());

  // botchat.css
  let botchat = gulp.src([
    `${path.app.scss}botchat/botchat.scss`
  ])
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      sourceComments: 'map'
    }).on('error', $.sass.logError))
    .pipe($.postcss( processors ))
    .pipe($.sourcemaps.write('./'), {
			destPath: `${path.dist.css}`
		})
    .pipe(gulp.dest(`${path.dist.css}`))
    .pipe(browserSync.stream());

  // Stream merge
  return merge(master, botchat);
});

/****** HTML ******/
gulp.task('html', () => {

  /**
   * Replaces variable {{variable}} with config file value
   * @param  {String} match {{variable}}
   * @param  {String} var   variable
   * @param  {Number} off   0
   * @param  {String} str   Whole string
   * @return {String}       Result
   */
  function replaceVar(match, variable, off, str) {
    return (client[variable]) ? client[variable] : match;
  }

  let varRegex = /{{(\w+)}}/g;

  // index.html
  let index = gulp.src([`${path.app.base}index.html`])
    .pipe($.inject(gulp.src([ `${path.app.base}snippet.html` ]), {
      starttag: '<!-- inject:snippet:{{ext}} -->',
      transform: function(filePath, file) {
        return file.contents.toString('utf8');
    }}))
    .pipe($.if(client['background-video'], $.inject(gulp.src([ `${path.app.base}video.html` ]), {
      starttag: '<!-- inject:video:{{ext}} -->',
      transform: function(filePath, file) {
        return file.contents.toString('utf8');
    }})))
    .pipe($.replace(varRegex, replaceVar))
    .pipe(gulp.dest(`${path.dist.base}`));

  // index.dev.html
  let index_dev = gulp.src([`${path.app.base}index.html`])
    .pipe($.rename({ suffix: '.dev'}))
    .pipe($.inject(gulp.src([`${path.app.base}snippet.dev.html`]), {
      starttag: '<!-- inject:snippet:{{ext}} -->',
      transform: function(filePath, file) {
        return file.contents.toString('utf8');
    }}))
    .pipe($.if(client['background-video'], $.inject(gulp.src([ `${path.app.base}video.html` ]), {
      starttag: '<!-- inject:video:{{ext}} -->',
      transform: function(filePath, file) {
        return file.contents.toString('utf8');
    }})))
    .pipe($.replace(varRegex, replaceVar))
    .pipe(gulp.dest(`${path.dist.base}`));

  // index.test.html
  let index_test = gulp.src([`${path.app.base}index.html`])
    .pipe($.rename({ suffix: '.test' }))
    .pipe($.inject(gulp.src([ `${path.app.base}snippet.test.html` ]), {
      starttag: '<!-- inject:snippet:{{ext}} -->',
      transform: function(filePath, file) {
        return file.contents.toString('utf8');
    }}))
    .pipe($.if(client['background-video'], $.inject(gulp.src([ `${path.app.base}video.html` ]), {
      starttag: '<!-- inject:video:{{ext}} -->',
      transform: function(filePath, file) {
        return file.contents.toString('utf8');
    }})))
    .pipe($.replace(varRegex, replaceVar))
    .pipe(gulp.dest(`${path.dist.base}`));

  // index.local.html
  let index_local = gulp.src([`${path.app.base}index.html`])
    .pipe($.rename({ suffix: '.local'}))
    .pipe($.inject(gulp.src([`${path.app.base}snippet.local.html`]), {
      starttag: '<!-- inject:snippet:{{ext}} -->',
      transform: function(filePath, file) {
        return file.contents.toString('utf8');
    }}))
    .pipe($.if(client['background-video'], $.inject(gulp.src([ `${path.app.base}video.html` ]), {
      starttag: '<!-- inject:video:{{ext}} -->',
      transform: function(filePath, file) {
        return file.contents.toString('utf8');
    }})))
    .pipe($.replace(varRegex, replaceVar))
    .pipe(gulp.dest(`${path.dist.base}`));

  // Stream merge
  return merge(index, index_dev, index_test, index_local);
});
gulp.task('html-browser-sync', ['html'], (done) => {
  browserSync.reload();
  done();
});

/****** OTHER ******/
gulp.task('other', () =>
  gulp.src([
    `${path.app.files}**/*`
  ])
    .pipe(gulp.dest(`${path.dist.files}`))
);

/****** SERVE & WATCH ******/
gulp.task('serve', () => {
  browserSync.init({
    notify: false,
    logConnections: true,
    logPrefix: 'LB',
    server: {
      baseDir: `${path.dist.base}`,
      index: `index.test.html`
    },
    port: 8080
  });
  gulp.watch([`${path.app.js}**/*.js`], ['js-browser-sync']);
  gulp.watch([`${path.app.scss}**/*.scss`], ['styles']);
  gulp.watch([`${path.app.base}*.html`], ['html-browser-sync']);
  gulp.watch([`${path.app.files}**/*`], ['other']);
});

/****** BUILD ******/
gulp.task('build', ['scripts', 'styles', 'html', 'other']);

/****** DEFAULT ******/
gulp.task('default', ['build', 'serve']);
