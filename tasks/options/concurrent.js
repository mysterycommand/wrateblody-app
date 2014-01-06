'use strict';

module.exports = {
    dev: [
        'compass:dev',
        'newer:copy:dev'
    ],
    dist: [
        'compass:dist',
        'newer:copy:dev',
        'imagemin',
        'svgmin',
        'htmlmin'
    ],
    test: [
        'newer:copy:dev'
    ]
};
