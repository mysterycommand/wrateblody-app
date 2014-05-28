/** ================================================================================================================ **/
/**
 * @fileOverview
 *
 * @author Matt Hayes <matt@mysterycommand.com>
 * @version 0.1.3
 */
/** ================================================================================================================ **/

/* jshint expr: true */

'use strict';

define(function(require) {
    var BookView = require('app/views/BookView');

    describe('BookView', function() {
        it('should exist', function() {
            expect(BookView).to.exist;
        });
    });
});
