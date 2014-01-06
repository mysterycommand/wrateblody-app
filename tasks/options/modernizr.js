'use strict';

module.exports = {
    devFile: '<%= config.app %>/bower_components/modernizr/modernizr.js',
    outputFile: '<%= config.temp %>/bower_components/modernizr/modernizr.js',
    parseFiles: true,
    files: [
        '<%= config.dist %>/styles/**/*.scss',
        '<%= config.dist %>/scripts/**/*.js',
        '<%= config.dist %>/scripts/templates/**/*.html',
        '<%= config.dist %>/*.html'
    ],
    uglify: false
};
