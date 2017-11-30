
//---------------------------------------- init ---------------------------------------//
const gulp = require('gulp');
const webpack = require('webpack');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const notify = require('gulp-notify');
const rimraf = require('rimraf');
const gulpWebpack = require('webpack-stream');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const gulpStylelint = require('gulp-stylelint');

// ---------------------------------------- webpack --------------------------//
gulp.task('webpack', function() {
    return gulp.src('src/scripts/main.js')
         .pipe(gulpWebpack(require('./webpack.config.js'),webpack))
         .on('error', function(){
            this.emit("end");
         })
         .on('error', notify.onError({title: "Webpack error"}))
         .pipe(gulp.dest('./build'));    
});
//---------------------------------------- pug -----------------------------------------//
gulp.task('pug', function() {
    return gulp.src('./src/templates/index.pug')
      .pipe(pug({ pretty: true }))
      .on('error', notify.onError(function(error) {
        console.log(123);
        return {
          title: 'pug',
          message:  error.message
        }
       }))
      .pipe(gulp.dest('./build'));
  });
//---------------------------------------- css ---------------------------------------//
gulp.task('css', function () {
    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass()).on('error', notify.onError({ title: 'Style' }))
        .pipe(gulpStylelint({
            "failAfterError": false,
            "reporters": [
              {formatter: 'string', console: true}
            ]
          }))
        .pipe(postcss())
        .pipe(csso())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./build/styles'))
        .pipe(browserSync.stream());
});
//------------------------------------------ copy img --------------------------------//
gulp.task('copy.image', function() {
    return gulp.src('./src/images/**/*.*', {since: gulp.lastRun('copy.image')})
      .pipe(gulp.dest('./build/img'));
});
//------------------------------------------ copy fonts --------------------------------//
gulp.task('copy.fonts', function() {
    return gulp.src('./src/fonts/**/*.*', {since: gulp.lastRun('copy.fonts')})
      .pipe(gulp.dest('./build/fonts'));
});     

//---------------------------------------- watch ---------------------------------------//
gulp.task('watch', function() {
    gulp.watch('./src/scripts/**/*.js', gulp.series('webpack'));
    gulp.watch('./src/styles/**/*.css', gulp.series('css'));
    gulp.watch('./src/templates/**/*.pug', gulp.series('pug'));
});

//---------------------------------------- server ---------------------------------------//
gulp.task('serve', function() {
    browserSync.init({
        //proxy: 'localhost:3000',
        open: false,
        server: './build'

    });
    browserSync.watch(['./build' + '/**/*.*', '!**/*.css'], browserSync.reload);
});


//---------------------------------------- clean ---------------------------------------//
gulp.task('clean', function(cb) {
    return rimraf('./build', cb);
});


//---------------------------------------- default ---------------------------------------//
gulp.task('default', gulp.series(
    'clean',
    gulp.parallel(
        'copy.image',
        'copy.fonts',
        'css',
        'webpack',
        'pug'
    ),
    gulp.parallel(
        'watch',
        'serve'
    )
));
