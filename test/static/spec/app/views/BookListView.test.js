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
    var BookListView = require('app/views/BookListView');

    describe('BookListView', function() {
        it('should exist', function() {
            expect(BookListView).to.exist;
        });
    });
});
