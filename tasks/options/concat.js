'use strict';

module.exports = {
    dist: {
        files: {
            '<%= config.dist %>/styles/main.css': [
                '<%= config.temp %>/bower_components/normalize-css/normalize.css',
                '<%= config.temp %>/styles/**/*.css'
            ]
        }
    }
};
