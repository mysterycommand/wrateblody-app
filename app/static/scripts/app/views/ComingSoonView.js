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

    var comingSoonTemplate = require('text!app/templates/comingSoonTemplate.tpl');

    var ComingSoonView = Bb.View.extend({
        el: $('#app'),
        templateFn: _.template(comingSoonTemplate),
        events: {
            'click .back': 'onClickBack'
        },

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

    return ComingSoonView;
});
