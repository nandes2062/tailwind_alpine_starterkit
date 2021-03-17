const gulp = require('gulp');
const log = require('fancy-log');
const responsive = require('gulp-responsive-images'); // Install in Unix `sudo apt-get install graphicsmagick`
const imagemin = require('gulp-imagemin');
const colors = require('ansi-colors');
const count = require('gulp-count');

// load config & imagesResize
const config = require('../config');
const imagesResize = require('../imagesResize');

const task = () => gulp.src(config.responsive.sourceFiles)

  .pipe(responsive(imagesResize, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 70,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Strip all metadata
      withMetadata: false,
    }))
  // minify (production)
  .pipe(imagemin([
    // plugins (https://www.npmjs.com/browse/keyword/imageminplugin)
    // imagemin.gifsicle(),
    imagemin.mozjpeg(),
    imagemin.optipng(),
    // imagemin.svgo()
  ], {
      // options
      verbose: true
    }))

  // log
  .pipe(count({
    message: colors.white('Responsive image files processed: <%= counter %>'),
    logger: (message) => log(message)
  }))

  // save
  .pipe(gulp.dest(config.responsive.destinationFolder));

gulp.task('responsive', task);
module.exports = task;