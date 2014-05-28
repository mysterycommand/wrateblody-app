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
    var NavView = require('app/views/NavView');

    var booksTemplate = require('text!app/templates/booksTemplate.tpl');

    var BooksView = Bb.View.extend({
        el: $('#app'),
        templateFn: _.template(booksTemplate),
        events: {
            'click .sort-by': 'onClickSortBy'
        },

        initialize: function(options) {
            // this.authorsEditors = options.authorsEditors;
            // this.books = options.books;

            this.navView = new NavView();

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

            this.$el.find('header').html(this.navView.render().el);

            var sortBy = location.pathname.split('/').pop();
            this.$el.find('#' + sortBy).attr('checked', true);
            this.$el.find('.list-view').empty().append(this.listViews[sortBy].render().el);

            return this;
        },

        onClickSortBy: function(event) {
            event.stopPropagation();
            Bb.history.navigate('books/' + event.target.id, { replace: true });

            var sortBy = location.pathname.split('/').pop();
            this.$el.find('[checked="checked"]').attr('checked', false);
            this.$el.find('#' + sortBy).attr('checked', true);
            this.$el.find('.list-view').empty().append(this.listViews[sortBy].render().el);
        }
    });

    return BooksView;
});
