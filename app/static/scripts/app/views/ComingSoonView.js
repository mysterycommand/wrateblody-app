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

    var NavView = require('app/views/NavView');

    var comingSoonTemplate = require('text!app/templates/comingSoonTemplate.tpl');

    var ComingSoonView = Bb.View.extend({
        el: $('#app'),
        templateFn: _.template(comingSoonTemplate),

        initialize: function(/*options*/) {
            this.navView = new NavView();
        },

        render: function() {
            this.$el.html(this.templateFn());
            this.$el.find('header').html(this.navView.render().el);
            return this;
        }
    });

    return ComingSoonView;
});
