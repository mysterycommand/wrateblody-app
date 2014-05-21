'use strict';

module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= config.appStatic %>/images',
            src: '{,*/}*.{gif,jpeg,jpg,png}',
            dest: '<%= config.distStatic %>/img'
        }]
    }
};
