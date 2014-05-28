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
    var BooksView = require('app/views/BooksView');

    describe('BooksView', function() {
        it('should exist', function() {
            expect(BooksView).to.exist;
        });
    });
});
