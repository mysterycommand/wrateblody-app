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

    var NavView = require('app/views/NavView');

    var authorEditorTemplate = require('text!app/templates/authorEditorTemplate.tpl');

    var AuthorEditorView = Bb.View.extend({
        el: $('#app'),
        templateFn: _.template(authorEditorTemplate),

        initialize: function(/*options*/) {
            this.navView = new NavView();
        },

        render: function() {
            this.$el.html(this.templateFn(this.model.attributes));
            this.$el.find('header').html(this.navView.render().el);
            return this;
        }
    });

    return AuthorEditorView;
});
