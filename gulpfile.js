'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var cleanCSS    = require('gulp-clean-css');
let sourcemaps  = require('gulp-sourcemaps');
var connect     = require('gulp-connect');
var watch       = require('gulp-watch');
var uglify      = require('gulp-uglify');
var awspublish  = require('gulp-awspublish');
var gulpIgnore  = require('gulp-ignore');

gulp.task('sass', function () {
  gulp.src('./lib/assets/stylesheets/assembly.scss')
    .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
    .pipe(concat('assembly.min.css'))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src('./lib/assets/javascripts/assembly/*.js')
    .pipe(concat('assembly.min.js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload());
});

gulp.task('server', function(done) {
  connect.server({
    livereload: true,
    root: [__dirname],
    port: process.env.PORT || 8900
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

gulp.task('build', ['sass', 'js']);

gulp.task('s3_sync', ['sass', 'js'], function() {

  var publisher = awspublish.create({
    region: 'eu-west-1',
    params: {
      Bucket: 'assembly-production-style-guide'
    }
  });

  return gulp.src(['./**', '!./node_modules/**', '!./lib/**', , '!./sass-cache/**'])
    .pipe(publisher.publish())
    .pipe(publisher.sync())
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});
