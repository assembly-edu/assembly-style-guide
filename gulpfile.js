'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var minifyCSS   = require('gulp-minify-css');
var rename      = require('gulp-rename');
var http        = require('http');
var connect     = require('gulp-connect');
var watch       = require('gulp-watch');

gulp.task('sass', function () {
  gulp.src('./dist/sass/main.scss')
    .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
    .pipe(concat('/assembly.min.css'))
    .pipe(minifyCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

gulp.task('server', function(done) {
  connect.server({
    livereload: true,
    root: ['./dist',]
  });
});

gulp.task('livereload', function() {
  gulp.src(['./dist/index.html'])
    .pipe(watch('./dist/index.html'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('./dist/sass/**/*.scss', ['sass']);
  gulp.watch('./dist/**/*.html', ['livereload']);
})

gulp.task('default', ['sass', 'server', 'watch']);