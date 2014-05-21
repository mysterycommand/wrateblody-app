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
    var Bb = require('backbone');

    var AuthorEditorModel = Bb.Model.extend({
        defaults: {
            id: 0,
            firstName: '',
            lastName: '',
            listName: '',
            sortName: '',
            url: '',

            bookIds: [],

            slug: ''
        }
    });

    return AuthorEditorModel;
});