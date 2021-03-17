/**
 * config
 * contains preferences for gulp tasks, folders, extensions et al
 */

const config = {

    // A-Z!

    // Browsersync
    // https://www.browsersync.io/docs/options
    'browserSync': {
        'proxy': process.env.APP_HOST,
        'port': 3000,
        'open': false,
        'reloadOnRestart': true,
        'notify': false,
        'reloadDelay': 0,
        'ghostMode': false, // disable mirroring clicks, scrolls and forms. it’s too buggy.
        'snippetOptions': {
            'ignorePaths': ["anonimo/**"]
        }
    },

    // Clean
    // clean asset folders before new assets are generated
    'clean': {
        'cleanableTasks': [
            'images',
            'responsive',
            'templates',
            'scripts',
            'styles',
            'tailwind',
            'svg'
        ]
    },

    // Copy
    // copy assets from source to app
    // watch out: path for destinationFolder is built relative from sourceFolder!
    'copy': [
        {
            'title': 'SVGs',
            'sourceFolder': './source/assets/svg',
            'sourceFiles': ['*.svg'],
            // 'dest': './html/resources/svg'
            'destinationFolder': './html/resources/svg'
        }
    ],

    // cssnano (minifies CSS)
    // http://cssnano.co/options/
    'cssnano': {
        'zindex': false,
        'discardUnused': false,
        'mergeIdents': false,
        'reduceIdents': false
    },

    // Images
    'images': {
        'sourceFiles': ['./source/assets/images/*.{jpg,png,gif,svg}'],
        'destinationFolder': './html/resources/images',
        'watchFiles': ['./source/assets/images/*.{jpg,png,gif,svg}'],
        'cleanFiles': ['./html/resources/images/*.{jpg,png,gif,svg}']
    },

    // Responsive images
    'responsive': {
        'sourceFiles': ['./source/assets/images/*/*.{jpg,jpeg,png,gif}'],
        'destinationFolder': './html/resources/images',
        'watchFiles': ['./source/assets/images/*/*.{jpg,jpeg,png,gif}'],
        'cleanFiles': ['./html/resources/images/*']
    },

    // Favicon
    'favicon': {
        'sourceFiles': ['./source/assets/favicon/*.png'],
        'destinationFolder': './html',
        'watchFiles': ['./source/assets/favicon/*.png'],
        'cleanFiles': ['./html/favicon.ico']
    },

    // Modernizr
    // https://modernizr.com/docs
    'modernizr': {
        'feature-detects': [
            'css/animations',
            'css/filters',
            'css/flexbox',
            'css/pointerevents',
            'css/transforms3d',
            'css/transitions',
            'css/vhunit',
            'css/vwunit',
            'css/backgroundblendmode',
            'css/cssgrid',
            'css/positionsticky'
        ],
        'options': [
            'setClasses'
        ],
        'classPrefix': ''
    },

    // Templates
    'templates': {
        'sourceFolder': './source',
        'sourceFiles': ['./source/views/**/*.twig'],
        // 'sourceFiles': ['./source/views/**/*.pug'],
        'destinationFolder': './html',
        'watchFiles': ['./source/**/*.{twig,html}'],
        'cleanFiles': ['./html/**/*.html']
    },

    // Scripts
    'scripts': {
        'sourceFiles': ['./source/main.js'],
        'destinationFolder': './html/resources/js',
        'watchFiles': ['./source/**/*.js'],
        'cleanFiles': ['./html/resources/js/*.{js,map}']
    },

    // Styles
    'styles': {
        'sourceFiles': ['./source/sass/styles.scss'],
        'destinationFolder': './html/resources/css',
        'watchFiles': ['./tailwind.config.js', './source/sass/**/*.scss'],
        'cleanFiles': ['./html/resources/css/styles.{css,map}']
    },

    // Tailwind
    'tailwind': {
        'sourceFiles': ['./source/plugins/tailwind/tailwind.scss'],
        'destinationFolder': './html/resources/css',
        'watchFiles': ['./tailwind.config.js', './source/plugins/tailwind/**/*.scss'],
        'cleanFiles': ['./html/resources/css/tailwind.{css,map}']
    },

    // SVG
    // combines SVG files to into one with <symbol> elements (»SVG sprite«)
    'svg': {
        'sourceFiles': ['./source/assets/svg/**/*.svg'],
        'destinationFolder': './source/templates/svg',
        'watchFiles': ['./source/assets/svg/**/*.svg'],
        'cleanFiles': ['./html/resources/svg/*.svg']
    },
    'fonts': {
        'sourceFiles': ['./source/assets/fonts/**/*.*'],
        'destinationFolder': './html/resources/fonts',
        'watchFiles': ['./source/assets/fonts/**/*.*'],
        'cleanFiles': ['./html/resources/fonts/*.*']
    },

    // Watch
    // watches for file changes and fires up related tasks
    'watch': [
        {'responsive': ['responsive']},
        {'favicon': ['favicon']},
        {'images': ['images']},
        {'styles': ['styles']},
        {'tailwind': ['tailwind']},
        {'svg': ['svg']},
        {'fonts': ['fonts']},
        {'templates': ['templates']}
    ]
};

module.exports = config;