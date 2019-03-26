var gulp   = require('gulp');
var del    = require('del');
var util   = require('gulp-util');
var cache  = require('gulp-cache');
var config = require('../config');

// Clean dist folder to prevent conflicts
// keep images present as it might be time consuming
gulp.task('clean:dist', function() {
  return del.sync([
    config.dest.root + '/**/*'
  ]);
})

// Clear gulp cache
gulp.task('cache:clear', function (callback) {
  return cache.clearAll(callback)
})
