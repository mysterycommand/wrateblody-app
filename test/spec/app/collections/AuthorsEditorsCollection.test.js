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
    var AuthorsEditorsCollection = require('app/collections/AuthorsEditorsCollection');

    describe('AuthorsEditorsCollection', function() {
        it('should exist', function() {
            expect(AuthorsEditorsCollection).to.exist;
        });
    });
});
