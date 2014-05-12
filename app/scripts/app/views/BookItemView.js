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

    var bookItemTemplate = require('text!app/templates/bookItemTemplate.tpl');

    var BookItemView = Bb.View.extend({
        tagName: 'li',
        className: 'book',
        templateFn: _.template(bookItemTemplate),

        render: function() {
            this.$el.append(this.templateFn(this.model.attributes));
            return this;
        }
    });

    return BookItemView;
});
