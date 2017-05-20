var gulp = require('gulp');
var pug = require('gulp-pug');
var connect = require('gulp-connect');
var concatCss = require('gulp-concat-css');

gulp.task('connect', ['styles', 'scripts', 'views'], function() {
  connect.server({
    root: 'dist',
    port: 8888,
    livereload: true,
  });
});

gulp.task('views', function() {
  gulp
    .src(['./*.pug', './app/**/*.pug'])
    .pipe(pug())
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  gulp
    .src('./app/js/*.js')
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
});

gulp.task('styles', function() {
  gulp
    .src('./app/css/*.css')
    .pipe(concatCss('main.css'))
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload());
});

gulp.task('default', ['connect'], function() {
  gulp.watch('./app/**/*.css', ['styles']);
  gulp.watch('./app/**/*.js', ['scripts']);
  gulp.watch('./app/**/*.pug', ['views']);
  gulp.watch('./*.pug', ['views']);
});
