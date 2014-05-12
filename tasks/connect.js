'use strict';

var modRewrite = require('connect-modrewrite');

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
            ],
            middleware: function(connect, options, middlewares) {
                // Matches everything that does not contain a '.' (period)
                middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]']));
                options.base.forEach(function(base) {
                    middlewares.push(connect.static(base));
                });

                middlewares.push(connect().use('/bower_components', connect.static('./bower_components')));
                return middlewares;
            }
        }
    },
    test: {
        options: {
            open: false,
            port: 9001,
            base: [
                '<%= config.temp %>',
                '.'
            ],
            middleware: function(connect, options, middlewares) {
                middlewares.push(connect().use('/bower_components', connect.static('./bower_components')));
                return middlewares;
            }
        }
    },
    dist: {
        options: {
            base: '<%= config.dist %>',
            livereload: false
        }
    }
};
