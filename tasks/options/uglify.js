'use strict';

module.exports = {
    dist: {
        files: {
            '<%= config.dist %>/scripts/main.js': '<%= config.dist %>/scripts/main.js',
            '<%= config.dist %>/scripts/vendor/modernizr.js': '<%= config.dist %>/scripts/vendor/modernizr.js'
        }
    }
};
