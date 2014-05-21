'use strict';

module.exports = {
    options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
    },
    all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= config.appStatic %>/scripts/{,*/}*.js',
        '!<%= config.appStatic %>/scripts/vendor/*',
        'test/static/spec/{,*/}*.js'
    ]
};
