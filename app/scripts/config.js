/** ================================================================================================================ **/
/**
 * @fileOverview
 *
 * @author Matt Hayes <matt@mysterycommand.com>
 * @version 0.0.1
 */
/** ================================================================================================================ **/

'use strict';

require.config({
    deps: ['main'],
    paths: {
        handlebars: '../bower_components/handlebars/handlebars.runtime',
        jquery: '../bower_components/jquery/jquery',
        text: '../bower_components/requirejs-text/text'
    },
    shim: {
        handlebars: {
            exports: 'Handlebars',
            /* https://github.com/gruntjs/grunt-contrib-handlebars/issues/48#issuecomment-17923555 */
            init: function() {
                /* global Handlebars: true */
                this.Handlebars = Handlebars;
                return this.Handlebars;
            }
        }
    }
});
