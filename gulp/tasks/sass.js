var gulp         = require('gulp');
var sass         = require('gulp-sass');
var plumber      = require('gulp-plumber');
var config       = require('../config');

// Sass task
gulp.task('sass', function() {
  return gulp
    .src(config.src.sass + '/*.{sass,scss}')
    .pipe(plumber({
      errorHandler: config.errorHandler
    }))
    .pipe(sass({
        outputStyle: config.production ? 'compact' : 'expanded', // nested, expanded, compact, compressed
        precision: 5,
        includePaths : [config.src.sass]
    }))
    .on('error', config.errorHandler)
    .pipe(gulp.dest(config.dest.css))
});

gulp.task('sass:watch', function() {
  gulp.watch(config.src.sass + '/**/*.{sass,scss}', ['sass']);
});
