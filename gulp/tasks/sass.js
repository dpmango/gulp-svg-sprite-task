const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const {default: config} = require('../config.js');

// Sass task
const build = () =>
  gulp
    .src(config.src.sass + '/*.{sass,scss}')
    .pipe(
      plumber({
        errorHandler: config.errorHandler,
      })
    )
    .pipe(
      sass({
        outputStyle: process.env.NODE_ENV === 'production' ? 'compact' : 'expanded', // nested, expanded, compact, compressed
        precision: 5,
        includePaths: ['node_modules', config.src.sass],
      })
    )
    // .on('error', config.errorHandler)
    .pipe(gulp.dest(config.dest.css));

const watch = () => {
  gulp.watch(
    [config.src.sass + '/**/*.{sass,scss}'],
    build
  );
}

exports.default = { build, watch }