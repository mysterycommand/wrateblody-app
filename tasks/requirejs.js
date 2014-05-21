'use strict';

module.exports = {
    dist: {
        // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
        options: {
            baseUrl: '<%= config.appStatic %>/scripts',
            mainConfigFile: '<%= config.appStatic %>/scripts/config.js',
            name: '../../../node_modules/almond/almond',
            out: '<%= config.distStatic %>/js/app.min.js',
            paths: {
                jquery: '../../../bower_components/jquery/dist/jquery',
                backbone: '../../../bower_components/backbone/backbone',
                underscore: '../../../bower_components/underscore/underscore',
                text: '../../../bower_components/requirejs-text/text'
            },
            insertRequire: ['main'],

            optimize: 'uglify',
            preserveLicenseComments: false,
            useStrict: true
        }
    }
};
