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
    // var _ = require('underscore');

    var ListView = Bb.View.extend({
        tagName: 'ul',
        className: 'inner',
        ItemViewClass: Bb.View,

        initialize: function(/*options*/) {
            var proto = Object.getPrototypeOf(this);
            var $uper = Object.getPrototypeOf(proto);

            while ($uper) {
                if ($uper.className) {
                    proto.className = $uper.className + ' ' + proto.className;
                }

                $uper = Object.getPrototypeOf($uper);
            }
        },

        render: function() {
            this.$el.empty();
            this.addAll(this.collection);
            return this;
        },

        addOne: function(item) {
            var itemView = new this.ItemViewClass({
                model: item
            });

            this.$el.append(itemView.render().el);
        },

        addAll: function() {
            this.collection.each(this.addOne, this);
        }
    });

    return ListView;
});
