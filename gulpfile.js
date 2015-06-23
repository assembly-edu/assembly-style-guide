'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var minifyCSS   = require('gulp-minify-css');
var connect     = require('gulp-connect');
var watch       = require('gulp-watch');
var uglify      = require('gulp-uglify');

gulp.task('sass', function () {
  gulp.src('./lib/assets/stylesheets/assembly.scss')
    .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
    .pipe(concat('assembly.min.css'))
    .pipe(minifyCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src('./lib/assets/javascripts/assembly/*.js')
    .pipe(concat('assembly.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload());
});

gulp.task('server', function(done) {
  connect.server({
    livereload: true,
    root: [__dirname],
    port: process.env.PORT || 8080
  });
});

gulp.task('livereload', function() {
  gulp.src(['./index.html'])
    .pipe(watch('./index.html'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('./lib/assets/stylesheets/**/*.scss', ['sass']);
  gulp.watch('./lib/assets/javascripts/**/*.js', ['js']);
  gulp.watch('./**/*.html', ['livereload']);
})

gulp.task('default', ['sass', 'js', 'server', 'watch']);