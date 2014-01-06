'use strict';

module.exports = {
    options: {
        cssDir:                  '<%= config.temp %>/styles',
        generatedImagesDir:      '<%= config.temp %>/images/generated',

        sassDir:                 '<%= config.app %>/styles',
        imagesDir:               '<%= config.app %>/images',
        javascriptsDir:          '<%= config.app %>/scripts',
        fontsDir:                '<%= config.app %>/styles/fonts',
        importPath:              '<%= config.app %>/bower_components',

        httpImagesPath:          '/images',
        httpGeneratedImagesPath: '/images/generated',

        httpFontsPath:           '/styles/fonts',

        relativeAssets: false,
        assetCacheBuster: false
    },
    dist: {
        options: {
            generatedImagesDir:  '<%= config.dist %>/images/generated'
        }
    },
    dev: {
        options: {
            debugInfo: true
        }
    }
};
