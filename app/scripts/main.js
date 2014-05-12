/** ================================================================================================================ **/
/**
 * @fileOverview
 *
 * @author Matt Hayes <matt@mysterycommand.com>
 * @version 0.0.0
 */
/** ================================================================================================================ **/

'use strict';

define(function(require) {
    var $ = require('jquery');
    var Bb = require('backbone');

    var AppRouter = require('app/AppRouter');

    $(function() {
        /* jshint unused: false */
        var app = new AppRouter();
        Bb.history.start({ pushState: true });

        $(document).on('click', 'a', function(event) {
            var href = $(this).attr('href');
            var isURL = href.indexOf('://') !== -1;

            if (! isURL) {
                event.preventDefault();
                Bb.history.navigate(href, { trigger: true });
            }
        });
    });
});
