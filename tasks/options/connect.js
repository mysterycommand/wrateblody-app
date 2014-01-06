'use strict';

module.exports = {
    options: {
        port: 9000,
        livereload: 35729,
        hostname: '0.0.0.0'
    },
    livereload: {
        options: {
            base: [
                '<%= config.temp %>',
                '<%= config.app %>'
            ]
        }
    },
    test: {
        options: {
            port: 9001,
            base: [
                '<%= config.temp %>',
                '<%= config.app %>',
                '<%= config.test %>'
            ]
        }
    },
    dist: {
        options: {
            livereload: false,
            base: [
                '<%= config.dist %>'
            ]
        }
    }
};
