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
    var _ = require('underscore');

    var BookItemView = require('app/views/BookItemView');

    var bookListTemplate = require('text!app/templates/bookListTemplate.tpl');

    var BookListView = Bb.View.extend({
        templateFn: _.template(bookListTemplate),

        render: function() {
            this.$el.html(this.templateFn());
            this.addAll();
            return this;
        },

        addOne: function(book) {
            var itemView = new BookItemView({
                model: book
            });

            this.$el.find('.inner').append(itemView.render().el);
        },

        addAll: function() {
            this.collection.each(this.addOne, this);
        }
    });

    return BookListView;
});
