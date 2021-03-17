const gulp = require('gulp');
const colors = require('ansi-colors');
const asciify = require('asciify');

const task = (done) => {

    if (process.env.APP_ENV === 'production') {

        console.log(colors.white('\n  Production'));

        // bring out some ASCII art
        asciify('SITE', {
            font: 'big',
            color: 'red'
        }, (err, res) => {
            console.log(res);
            done();
        });
    }
    else {

        console.log(colors.white('\n  Development'));

        // bring out some ASCII art
        asciify('NandesStarterKit', {
            font: 'mini',
            color: 'blue'
        }, (err, res) => {
            console.log(res);
            done();
        });
    }
};

gulp.task('init', task);
module.exports = task;