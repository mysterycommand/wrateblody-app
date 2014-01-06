'use strict';

module.exports = {
    options: {
        browsers: ['last 1 version']
    },
    dst: {
        files: [{
            expand: true,
            cwd: '<%= config.temp %>/styles/',
            dest: '<%= config.temp %>/styles/',
            src: '**/*.css'
        }]
    }
};
