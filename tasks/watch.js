'use strict';

module.exports = {
    scripts: {
        files: ['<%= config.appStatic %>/scripts/{,*/}*.js'],
        tasks: ['jshint']
    },
    styles: {
        files: ['<%= config.appStatic %>/styles/{,*/}*.scss'],
        tasks: ['sass']
    },
    tasks: {
        files: [
            'Gruntfile.js',
            'tasks/*.js'
        ],
        tasks: ['jshint']
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '<%= config.appStatic %>/{,*/}*.html',
            '<%= config.temp %>/styles/{,*/}*.css',
            '<%= config.appStatic %>/images/{,*/}*'
        ]
    }
};
