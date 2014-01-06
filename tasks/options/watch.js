'use strict';

module.exports = {
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '<%= config.app %>/**/*.html',
            '<%= config.temp %>/styles/**/*.css',
            '<%= config.app %>/images/**/*.{gif,jpeg,jpg,png,svg,webp}'
        ]
    },
    scripts: {
        files: [
            '<%= config.app %>/scripts/**/*.js',
            'gruntfile.js'
        ],
        tasks: [
            'jshint'
        ],
        options: {
            livereload: true
        }
    },
    styles: {
        files: [
            '<%= config.app %>/styles/**/*.scss'
        ],
        tasks: [
            'compass:dev'/*,
            'autoprefixer'*/
        ]
    },
    tests: {
        files: [
            '<%= config.test %>/spec/{,*/}*.js'
        ],
        tasks: [
            'test:watch'
        ]
    }
};
