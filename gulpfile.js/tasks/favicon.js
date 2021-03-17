const gulp = require('gulp');
const ico = require('gulp-to-ico');
const size = require('gulp-size');

// load config
const config = require('../config');

const task = () => gulp.src(config.favicon.sourceFiles)

  .pipe(ico('favicon.ico', { resize: true, sizes: [16, 24, 32, 64] }))

  // log
  .pipe(size({'title': 'favicon.ico'}))

  // save
  .pipe(gulp.dest(config.favicon.destinationFolder));

gulp.task('favicon', task);
module.exports = task;