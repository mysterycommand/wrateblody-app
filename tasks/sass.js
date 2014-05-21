'use strict';

module.exports = {
    options: {
        style: 'expanded'
    },
    dist: {
        files: [{
            expand: true,
            cwd: '<%= config.appStatic %>',
            src: [
                'styles/*.scss',
                '!styles/_*.scss'
            ],
            dest: '<%= config.temp %>',
            ext: '.css'
        }]
    }
};
