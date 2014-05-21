'use strict';

module.exports = {
    options: {
        assetsDirs: ['<%= config.distStatic %>', '<%= config.distStatic %>/img']
    },
    html: ['<%= config.distStatic %>/{,*/}*.html'],
    css: ['<%= config.temp %>/styles/{,*/}*.css']
};
