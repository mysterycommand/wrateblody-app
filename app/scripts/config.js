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
        handlebars: '../bower_components/handlebars.js/dist/handlebars.runtime',
        jquery: '../bower_components/jquery/jquery',
        text: '../bower_components/requirejs-text/text'
    },
    shim: {}
});
