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

    var BookModel = require('app/models/BookModel');

    var BooksCollection = Bb.Collection.extend({
        model: BookModel
    });

    return BooksCollection;
});
