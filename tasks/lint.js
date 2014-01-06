'use strict';

module.exports = function(grunt) {
    grunt.registerTask('lint', [
        'newer:jshint:all'
    ]);
};
