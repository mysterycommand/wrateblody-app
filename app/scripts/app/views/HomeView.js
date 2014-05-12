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
    var $ = require('jquery');
    var Bb = require('backbone');
    var _ = require('underscore');

    var homeTemplate = require('text!app/templates/homeTemplate.tpl');

    var HomeView = Bb.View.extend({
        el: $('#main'),
        templateFn: _.template(homeTemplate),

        render: function() {
            this.$el.html(this.templateFn());
            return this;
        }
    });

    return HomeView;
});
