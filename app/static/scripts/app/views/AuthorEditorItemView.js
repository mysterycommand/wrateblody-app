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

    var authorEditorItemTemplate = require('text!app/templates/authorEditorItemTemplate.tpl');

    var AuthorEditorItemView = Bb.View.extend({
        tagName: 'li',
        className: 'author-editor',
        templateFn: _.template(authorEditorItemTemplate),

        render: function() {
            this.$el.append(this.templateFn(this.model.attributes));
            return this;
        }
    });

    return AuthorEditorItemView;
});
