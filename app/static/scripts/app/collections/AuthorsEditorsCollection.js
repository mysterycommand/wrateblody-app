/** ================================================================================================================ **/
/**
 * @fileOverview
 *
 * @author Matt Hayes <matt@mysterycommand.com>
 * @version 0.1.2
 */
/** ================================================================================================================ **/

'use strict';

define(function(require) {
    var Bb = require('backbone');

    var AuthorEditorModel = require('app/models/AuthorEditorModel');

    var AuthorsEditorsCollection = Bb.Collection.extend({
        model: AuthorEditorModel
    });

    return AuthorsEditorsCollection;
});
