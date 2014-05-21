'use strict';

module.exports = {
    options: {
        livereload: 35729
    },
    livereload: {
        options: {
            middleware: function(/*connect, options, middlewares*/) {
                process.env.NODE_ENV = 'dev';
                return [ require('./../app/index.js') ];
            }
        }
    },
    test: {
        options: {
            middleware: function(/*connect, options, middlewares*/) {
                process.env.NODE_ENV = 'test';
                return [ require('./../app/index.js') ];
            }
        }
    },
    dist: {
        options: {
            livereload: false,
            middleware: function(/*connect, options, middlewares*/) {
                return [ require('./../dist/index.js') ];
            }
        }
    }
};
