'use strict';

var grunt = require('grunt');

module.exports = {
    options: {
        module: 'wb-app',
        htmlmin: '<%= htmlmin.dist %>',
        bootstrap: function(module, script) {
            return grunt.template.process([
                'define(function(require) {',
                '    \'use strict\';',
                '',
                '    var angular = require(\'angular\');',
                '',
                '    angular.module(\'<%= module %>\').run(function($templateCache) {',
                '<%= script %>',
                '    });',
                '});'
            ].join('\n'), {
                data: {
                    module: module,
                    script: script
                        .split('\n')
                        .filter(function(line) { return line.indexOf('use strict') === -1; })
                        .map(function(line) {
                            line = line.replace(/\"/g, '\'');
                            line = line.replace(/  /g, '    ');
                            return '    ' + line;
                        })
                        .join('\n')
                }
            });
        }
    },
    dist: {
        cwd: '<%= config.app %>',
        dest: '<%= config.temp %>/scripts/templates.js',
        src: 'scripts/templates/**/*.html'
    }
};
