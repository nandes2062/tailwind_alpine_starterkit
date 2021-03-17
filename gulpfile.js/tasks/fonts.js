const gulp = require('gulp');
const log = require('fancy-log');
const colors = require('ansi-colors');
const size = require('gulp-size');
const plumber = require('gulp-plumber');
const count = require('gulp-count');
const rename = require('gulp-rename');

// load config
const config = require('../config');

const task = () => gulp.src(config.fonts.sourceFiles)

  // prevent pipe breaking caused by errors
  .pipe(plumber())

  // log
  .pipe(count({
    message: colors.white('FONTS files processed: <%= counter %>'),
    logger: (message) => log(message)
  }))

  // stop error prevention
  .pipe(plumber.stop())

  // log
  .pipe(size({ 'title': 'FONTs' }))

  // save
  .pipe(gulp.dest(config.fonts.destinationFolder));

gulp.task('fonts', task);
module.exports = task;
