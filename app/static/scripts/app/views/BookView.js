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

    var bookTemplate = require('text!app/templates/bookTemplate.tpl');

    var BookView = Bb.View.extend({
        el: $('#app'),
        templateFn: _.template(bookTemplate),

        initialize: function(/*options*/) {
            this.navView = new NavView();
        },

        render: function() {
            this.$el.empty();
            this.$el.append(this.navView.render().el);
            this.$el.append(this.templateFn(this.model.attributes));
            return this;
        }
    });

    return BookView;
});
