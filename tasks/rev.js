'use strict';

module.exports = {
    dist: {
        files: {
            src: [
                '<%= config.distStatic %>/js/{,*/}*.js',
                '<%= config.distStatic %>/css/{,*/}*.css',
                '<%= config.distStatic %>/img/{,*/}*.*',
                // '<%= config.distStatic %>/css/fonts/{,*/}*.*',
                '<%= config.distStatic %>/*.{ico,png}'
            ]
        }
    }
};
