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
    var AuthorEditorModel = require('app/models/AuthorEditorModel');

    describe('AuthorEditorModel', function() {
        it('should exist', function() {
            expect(AuthorEditorModel).to.exist;
        });
    });
});
