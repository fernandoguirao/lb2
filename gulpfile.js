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
  // index.html
  let index = gulp.src([`${path.app.base}index.html`])
    .pipe($.inject(gulp.src([
      `${path.app.base}snippet.html`
    ]), {
      starttag: '<!-- inject:snippet:{{ext}} -->',
      transform: function(filePath, file) {
        return file.contents.toString('utf8');
      }
    }))
    .pipe(gulp.dest(`${path.dist.base}`));

  // index.dev.html
  let index_dev = gulp.src([`${path.app.base}index.html`])
    .pipe($.rename({
      suffix: '.dev'
    }))
    .pipe($.inject(gulp.src([
      `${path.app.base}snippet.dev.html`
    ]), {
      starttag: '<!-- inject:snippet:{{ext}} -->',
      transform: function(filePath, file) {
        return file.contents.toString('utf8');
      }
    }))
    .pipe(gulp.dest(`${path.dist.base}`));

    // Stream merge
    return merge(index, index_dev);
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
    .pipe(gulp.dest(`${path.dist.base}`))
    .pipe(gulp.dest(`${path.dist.files}`))
);

/****** SERVE & WATCH ******/
gulp.task('serve', () => {
  browserSync.init({
    notify: false,
    logPrefix: 'LB',
    server: {
      baseDir: `${path.dist.base}`,
      index: `index.dev.html`
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
