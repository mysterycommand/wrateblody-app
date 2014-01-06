'use strict';

module.exports = {
    dist: {
        options: {
            optimize: 'none',
            logLevel: 0,

            findNestedDependencies: true,
            generateSourceMaps: true,
            inlineText: true,
            preserveLicenseComments: true,
            useStrict: true,
            wrap: true,

            baseUrl: '<%= config.app %>/scripts',
            mainConfigFile: '<%= config.app %>/scripts/config.js',
            out: '<%= config.temp %>/scripts/main.js',
            name: '../bower_components/almond/almond',

            /** @description Name the templates path, and add that module to the build. */
            paths: {
                templates: '../../<%= config.temp %>/scripts/templates'
            },
            include: 'templates',

            /** @see https://github.com/jrburke/almond#triggering-module-execution- */
            insertRequire: [
                'bootstrap',
                'templates'
            ]
        }
    }
};
