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
    var _ = require('underscore');

    var authorEditorTemplate = require('text!app/templates/authorEditorTemplate.tpl');

    var AuthorEditorView = Bb.View.extend({
        el: $('#main'),
        templateFn: _.template(authorEditorTemplate),
        events: {
            'click .back': 'onClickBack'
        },

        render: function() {
            this.$el.html(this.templateFn(this.model.attributes));
            return this;
        },

        onClickBack: function(event) {
            event.preventDefault();
            event.stopPropagation();
            window.history.back();
        }
    });

    return AuthorEditorView;
});
