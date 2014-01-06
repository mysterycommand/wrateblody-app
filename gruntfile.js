/**
 * @see http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
 */

'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    var config = {
        pkg: grunt.file.readJSON('package.json'),
        env: process.env
    };

    function loadConfigs(path) {
        var glob = require('glob');
        var object = {};
        var key;

        glob.sync('*', {cwd: path}).forEach(function(option) {
            key = option.replace(/\.js$/,'');
            object[key] = require(path + option);
        });

        return object;
    }

    grunt.util._.extend(config, loadConfigs('./tasks/options/'));
    grunt.initConfig(config);
    grunt.loadTasks('tasks');

};
