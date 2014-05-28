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

    var bookTemplate = require('text!app/templates/bookTemplate.tpl');

    var BookView = Bb.View.extend({
        el: $('#app'),
        templateFn: _.template(bookTemplate),

        initialize: function(options) {
            this.authorsEditors = options.authorsEditors;
            this.navView = new NavView();
        },

        render: function() {
            var book = {
                title: this.model.get('title'),
                url: this.model.get('url'),
                coverImageURL: this.model.get('coverImageURL'),
                description: this.model.get('description'),
                authors: this.model.get('authorIds').map(function(authorId) {
                    return this.authorsEditors.get(authorId).attributes;
                }.bind(this)),
                editors: this.model.get('editorIds').map(function(editorId) {
                    return this.authorsEditors.get(editorId).attributes;
                }.bind(this))
            };
            this.$el.html(this.templateFn(book));
            this.$el.find('header').html(this.navView.render().el);
            return this;
        }
    });

    return BookView;
});
