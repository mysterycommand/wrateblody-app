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

    var navTemplate = require('text!app/templates/navTemplate.tpl');

    var NavView = Bb.View.extend({
        templateFn: _.template(navTemplate),
        events: {
            'click .back': 'onClickBack'
        },

        initialize: function NavView(/*options*/) {},

        render: function() {
            this.$el.html(this.templateFn());
            return this;
        },

        onClickBack: function(event) {
            event.preventDefault();
            event.stopPropagation();
            window.history.back();
        }
    });

    return NavView;
});
