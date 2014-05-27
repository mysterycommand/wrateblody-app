/** ================================================================================================================ **/
/**
 * @fileOverview
 *
 * @author Matt Hayes <matt@mysterycommand.com>
 * @version 0.1.1
 */
/** ================================================================================================================ **/

/* jshint expr: true */

'use strict';

define(function(require) {
    var BooksCollection = require('app/collections/BooksCollection');

    describe('BooksCollection', function() {
        it('should exist', function() {
            expect(BooksCollection).to.exist;
        });
    });
});
