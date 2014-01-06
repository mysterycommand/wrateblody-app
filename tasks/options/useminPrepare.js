'use strict';

module.exports = {
    options: {
        dest: '<%= config.dist %>'
    },
    html: [
        '<%= config.app %>/{,*/}*.html',
        '<%= config.app %>/scripts/templates/**/*.html'
    ]
};
