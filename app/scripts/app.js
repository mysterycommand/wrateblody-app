/** ================================================================================================================ **/
/**
 * @fileOverview
 *
 * @author Matt Hayes <matt@mysterycommand.com>
 * @version 0.0.1
 */
/** ================================================================================================================ **/

/* jshint expr: true, bitwise: false */

define([

    'handlebars',
    'jquery',
    'templates/section',
    'text!data/sample.json',

    // load partials last
    'templates/li'

], function (

    Handlebars,
    $,
    section,
    data

) {

    'use strict';

    Handlebars.registerHelper('times', function(n, block) {
        var str = '',
            i;
        for (i = 0; i < n; ++i) {
            str += block.fn(i);
        }
        return str;
    });

    Handlebars.registerHelper('gt', function (value, test, block) {
        console.log(value, test, block);
        if (value > test) {
            return block.fn(this);
        } else {
            return block.inverse(this);
        }
    });

    Handlebars.logger.log = function() {
        console.log(arguments);
    };

    return function() {
        // var IS_TOUCH = window.Modernizr.touch;
        data = JSON.parse(data);

        var hash = {},
            letter = '',
            $main = $('#js-main');

        data.posts.forEach(function(post) {
            post.stars = Math.random() * 5 | 0;
            letter = post.title.charAt(0).toUpperCase();
            hash[letter] || (hash[letter] = []);
            hash[letter].push(post);
        });

        Object.keys(hash).forEach(function(key) {
            $main.append(section({alpha: key, titles: hash[key]}));
        });
    };

});

/* ================================================================================================================== */
