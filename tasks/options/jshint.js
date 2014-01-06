'use strict';

module.exports = {
    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    all: [
        'gruntfile.js',
        '<%= config.app %>/scripts/**/*.js',
        '!<%= config.app %>/scripts/vendor/*',
        '<%= config.test %>/spec/**/*.js'
    ]
};
