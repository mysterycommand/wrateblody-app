'use strict';

module.exports = {
    options: {
        assetsDirs: [
            '<%= config.dist %>'
        ]
    },
    html: [
        '<%= config.dist %>/{,*/}*.html',
        '<%= config.dist %>/scripts/templates/**/*.html'
    ],
    css: [
        '<%= config.dist %>/styles/**/*.css'
    ]
};
