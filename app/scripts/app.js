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

    'jquery',
    'templates/tbody',
    'templates/tr',
    'text!data/sample.json'

], function (

    $,
    tbody,
    tr,
    data

) {

    'use strict';

    return function() {
        // var IS_TOUCH = window.Modernizr.touch;
        data = JSON.parse(data);

        var hash = {},
            letter = '',
            $table = $('#js-table');

        data.posts.forEach(function(post) {
            post.stars = Math.random() * 5 | 0;
            letter = post.title.charAt(0).toUpperCase();
            hash[letter] || (hash[letter] = []);
            hash[letter].push(post);
        });

        Object.keys(hash).forEach(function(key) {
            $table.append(tbody({alpha: key, titles: hash[key]}));
        });
    };

});

/* ================================================================================================================== */
