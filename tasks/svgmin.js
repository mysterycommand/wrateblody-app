'use strict';

module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= config.appStatic %>/images',
            src: '{,*/}*.svg',
            dest: '<%= config.distStatic %>/img'
        }]
    }
};
