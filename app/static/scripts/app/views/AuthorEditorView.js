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
    var Bb = require('backbone');
    var _ = require('underscore');

    var NavView = require('app/views/NavView');

    var authorEditorTemplate = require('text!app/templates/authorEditorTemplate.tpl');

    var AuthorEditorView = Bb.View.extend({
        el: $('#app'),
        templateFn: _.template(authorEditorTemplate),

        initialize: function(options) {
            this.books = options.books;
            this.navView = new NavView();
        },

        render: function() {
            var authorEditor = {
                listName: this.model.get('listName'),
                url: this.model.get('url'),
                books: this.model.get('bookIds').map(function(bookId) {
                    return this.books.get(bookId).attributes;
                }.bind(this))
            };
            this.$el.html(this.templateFn(authorEditor));
            this.$el.find('header').html(this.navView.render().el);
            return this;
        }
    });

    return AuthorEditorView;
});
