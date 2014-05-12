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
    var BookModel = require('app/models/BookModel');

    describe('BookModel', function() {
        it('should exist', function() {
            expect(BookModel).to.exist;
        });
    });
});
