const gulp = require('gulp');
const through = require('through');
const log = require('fancy-log');
const colors = require('ansi-colors');
const twig = require('gulp-twig');
const browserSync = require('browser-sync');
const notifier = require('node-notifier');
const plumber = require('gulp-plumber');
const count = require('gulp-count');
const htmlmin = require('gulp-htmlmin');
const removeHtmlComments = require('gulp-remove-html-comments');

// load config
const config = require('../config');

const task = () => {
    let hasErrors = false; // init

    return gulp.src(config.templates.sourceFiles)

        // prevent pipe breaking caused by errors
        .pipe(plumber())

        .pipe(twig({
            base: config.templates.sourceFolder,
            data: {
                title: 'Gulp and Twig',
                benefits: [
                    'Fast',
                    'Flexible',
                    'Secure'
                ]
            }
        }))
        .on('error', (err) => {

            // mark errors
            hasErrors = true;

            // throw error to console
            log(colors.bold(colors.red(err.name + ': ' + err.message)));

            // throw notification
            notifier.notify({
                title: 'ROOOAAAARRRRRR!',
                message: 'Templates gone wrong.',
                sound: 'Basso',
                contentImage: __dirname + '/../assets/trex.png'
            });
        })

        // stop error prevention
        .pipe(plumber.stop())
        // log
        .pipe(!hasErrors ? count({
            message: colors.white('HTML files generated from templates: <%= counter %>'),
            logger: (message) => log(message)
        }) : through())
        .pipe(process.env.APP_ENV === 'production' ? removeHtmlComments() : through())
        .pipe(process.env.APP_ENV === 'production' ? htmlmin({ collapseWhitespace: true }) : through())
        // save
        .pipe(gulp.dest(config.templates.destinationFolder))

        // reload browser
        .pipe(browserSync.stream());
};

gulp.task('templates', task);
module.exports = task;