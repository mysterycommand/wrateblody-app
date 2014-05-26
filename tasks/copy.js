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
                'index.js',
                'package.json',
                'Procfile',

                'static/*.{htaccess,html,txt}',
                'static/images/*'
            ],
            dest: '<%= config.dist %>/'
        }]
    }
};
