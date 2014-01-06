'use strict';

module.exports = function(grunt) {
    grunt.registerTask('serve', function(target) {
        if (target === 'dist') {
            return grunt.task.run([
                'build',
                'connect:dst:keepalive'
            ]);
        }

        grunt.task.run([
            'clean:dev',
            'concurrent:dev',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });
};
