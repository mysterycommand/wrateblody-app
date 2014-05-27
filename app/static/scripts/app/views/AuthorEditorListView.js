/** ================================================================================================================ **/
/**
 * @fileOverview
 *
 * @author Matt Hayes <matt@mysterycommand.com>
 * @version 0.1.1
 */
/** ================================================================================================================ **/

'use strict';

define(function(require) {
    var Bb = require('backbone');
    var _ = require('underscore');

    var AuthorEditorItemView = require('app/views/AuthorEditorItemView');

    var authorEditorListTemplate = require('text!app/templates/authorEditorListTemplate.tpl');

    var AuthorEditorListView = Bb.View.extend({
        templateFn: _.template(authorEditorListTemplate),

        render: function() {
            this.$el.html(this.templateFn());
            this.addAll();
            return this;
        },

        addOne: function(authorEditor) {
            var itemView = new AuthorEditorItemView({
                model: authorEditor
            });

            this.$el.find('.inner').append(itemView.render().el);
        },

        addAll: function() {
            this.collection.each(this.addOne, this);
        }
    });

    return AuthorEditorListView;
});
