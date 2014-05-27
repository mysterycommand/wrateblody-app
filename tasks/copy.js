'use strict';

module.exports = {
    dist: {
        files: [{
            dot: true,
            expand: true,
            cwd: '<%= config.app %>/',
            src: [
                'lib/**/*',

                '.gitignore',
                '.travis.yml',

                'index.js',
                'package.json',
                'Procfile',
                'README.md',

                'static/*.{htaccess,html,txt}',
                'static/images/*'
            ],
            dest: '<%= config.dist %>/'
        }]
    }
};
