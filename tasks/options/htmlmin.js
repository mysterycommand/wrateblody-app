'use strict';

module.exports = {
    dist: {
        options: {
            // removeCommentsFromCDATA: true,
            // https://github.com/yeoman/grunt-usemin/issues/44
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            // removeAttributeQuotes: true,
            // removeRedundantAttributes: true,
            // useShortDoctype: true,
            // removeEmptyAttributes: true,
            // removeOptionalTags: true
        },
        expand: true,
        cwd: '<%= config.app %>',
        dest: '<%= config.dist %>',
        src: '{,*/}*.html'
    }
};
