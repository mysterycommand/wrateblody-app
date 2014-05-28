/** ================================================================================================================ **/
/**
 * @fileOverview
 *
 * @author Matt Hayes <matt@mysterycommand.com>
 * @version 0.1.3
 */
/** ================================================================================================================ **/

'use strict';

define(function(require) {
    var ListView = require('app/views/ListView');

    var BookItemView = require('app/views/BookItemView');

    var BookListView = ListView.extend({
        className: 'by-title',
        ItemViewClass: BookItemView
    });

    return BookListView;
});
