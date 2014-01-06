'use strict';

module.exports = {
    dev: {
        expand: true,
        cwd: '<%= config.app %>',
        dest: '<%= config.temp %>',
        src: [
            'bower_components/normalize-css/normalize.css',
            'styles/**/*.css'
        ]
    },
    dist: {
        files: [
            {
                dot: true,
                expand: true,
                cwd: '<%= config.app %>',
                dest: '<%= config.dist %>',
                src: [
                    '*.{ico,png,txt}',
                    '.htaccess',
                    'images/**/*.webp',
                    '{,*/}*.html',
                    'styles/fonts/**/*.*'
                ]
            }, {
                expand: true,
                flatten: true,
                cwd: '<%= config.temp %>',
                dest: '<%= config.dist %>/scripts/vendor',
                src: 'bower_components/modernizr/modernizr.js'
            }, {
                expand: true,
                cwd: '<%= config.temp %>',
                dest: '<%= config.dist %>',
                src: 'scripts/main.js'
            }
        ]
    }
};
