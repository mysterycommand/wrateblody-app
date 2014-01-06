'use strict';

module.exports = function(grunt) {
    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'ngtemplates',
        'requirejs',
        'modernizr',
        'concat:dist',
        'copy:dist',
        'ngmin:dist',
        'uglify:dist',
        'cssmin:dist',
        'rev',
        'usemin',
        'usereplace'
    ]);
};
