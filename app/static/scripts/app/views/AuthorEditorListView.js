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
    var ListView = require('app/views/ListView');

    var AuthorEditorItemView = require('app/views/AuthorEditorItemView');

    var AuthorEditorListView = ListView.extend({
        className: 'by-author',
        ItemViewClass: AuthorEditorItemView
    });

    return AuthorEditorListView;
});
