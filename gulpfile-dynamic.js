const gulp = require('gulp');
const path = require('./package.json').path;
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const merge = require('merge-stream');
// const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');
const $ = require('gulp-load-plugins')({
  pattern: ['*'],
  scope: ['devDependencies']
});

/****** SCRIPTS ******/
gulp.task('scripts', () =>
  gulp.src([
    `${path.app2.js}**/*.js`
  ])
    .pipe($.sourcemaps.init())
    .pipe($.concat('master.js'))
    .pipe($.uglify())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(`${path.dist2.js}`))
);
gulp.task('js-browser-sync', ['scripts'], (done) => {
  browserSync.reload();
  done();
});

/****** STYLES ******/
gulp.task('styles', () => {
  let master = gulp.src([
    `${path.app2.less}mixins.less`,
    `${path.app2.less}master/*.less`
  ])
    .pipe($.concat(`master.less`))
    .pipe(gulp.dest(`${path.dist2.css}`))

  let botchat = gulp.src([
    `${path.app2.less}botchat/*.less`
  ])
    .pipe($.concat(`botchat.less`))
    .pipe(gulp.dest(`${path.dist2.css}`))

  return merge(master, botchat);
});

/****** SERVE & WATCH ******/
gulp.task('serve', () => {
  browserSync.init({
    notify: false,
    logConnections: true,
    logPrefix: 'LB',
    server: {
      baseDir: `${path.dist2.base}`,
      index: `index.html`
    },
    port: 8080
  });
  gulp.watch([`${path.app2.less}**/*.less`], ['styles']);
  gulp.watch([`${path.app2.js}**/*.js`], ['js-browser-sync']);
});

/****** BUILD ******/
gulp.task('build', ['styles', 'scripts']);

/****** DEFAULT ******/
gulp.task('default', ['build', 'serve']);
