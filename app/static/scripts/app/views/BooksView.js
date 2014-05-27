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
    var $ = require('jquery');
    var Bb = require('backbone');
    var _ = require('underscore');

    var AuthorEditorListView = require('app/views/AuthorEditorListView');
    var BookListView = require('app/views/BookListView');

    var booksTemplate = require('text!app/templates/booksTemplate.tpl');

    var BooksView = Bb.View.extend({
        el: $('#app'),
        templateFn: _.template(booksTemplate),
        events: {
            'click .back': 'onClickBack',
            'click .sort-by': 'onClickSortBy'
        },

        initialize: function(options) {
            // this.authorsEditors = options.authorsEditors;
            // this.books = options.books;

            this.listViews = {
                'by-author': new AuthorEditorListView({
                    collection: options.authorsEditors
                }),
                'by-title': new BookListView({
                    collection: options.books
                })
            };
        },

        render: function() {
            this.$el.html(this.templateFn());

            var sortBy = location.pathname.split('/').pop();
            this.$el.find('#' + sortBy).prop('checked', true);
            this.$el.find('.list-view').empty().append(this.listViews[sortBy].render().el);

            return this;
        },

        onClickBack: function(event) {
            event.preventDefault();
            event.stopPropagation();
            window.history.back();
        },

        onClickSortBy: function(event) {
            event.stopPropagation();
            Bb.history.navigate('books/' + event.target.id, { replace: true });

            var sortBy = location.pathname.split('/').pop();
            this.$el.find('.list-view').empty().append(this.listViews[sortBy].render().el);
        }
    });

    return BooksView;
});
