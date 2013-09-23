/** ================================================================================================================ **/
/**
 * @fileOverview
 *
 * @author Matt Hayes <matt@mysterycommand.com>
 * @version 0.0.1
 */
/** ================================================================================================================ **/

require([

    'jquery',
    'app'

], function (

    $,
    app

) {

    'use strict';

    if (window.$) {
        window.$.noConflict(true);
        delete window.jQuery;
        delete window.$;
    }

    if (window.Handlebars) {
        delete window.Handlebars;
    }

    $(app);

});

/* ================================================================================================================== */
