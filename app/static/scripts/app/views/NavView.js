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
            var label = (window.history.length === 2 && window.history.state === null) ? 'Home' : 'Back';
            this.$el.html(this.templateFn({ label: label }));
            return this;
        },

        onClickBack: function(event) {
            event.preventDefault();
            event.stopPropagation();

            switch(event.currentTarget.hash) {
                case '#back':
                    window.history.back();
                    break;

                default:
                    Bb.history.navigate('/', { trigger: true });
            }
        }
    });

    return NavView;
});
