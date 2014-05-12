/** ================================================================================================================ **/
/**
 * @fileOverview
 *
 * @author Matt Hayes <matt@mysterycommand.com>
 * @version 0.0.0
 */
/** ================================================================================================================ **/

/* jshint expr: true */

'use strict';

define(function(require) {
    var HomeView = require('app/views/HomeView');

    describe('HomeView', function() {
        it('should exist', function() {
            expect(HomeView).to.exist;
        });
    });
});
