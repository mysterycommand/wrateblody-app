'use strict';

module.exports = {
    dist: {
        expand: true,
        cwd: '<%= config.app %>/images',
        dest: '<%= config.dist %>/images',
        src: '**/*.{png,jpg,jpeg}'
    }
};
