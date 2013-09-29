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
    // 'lodash',

    'templates/authorSection',
    'templates/titleSection',
    'text!data/sample.json',

    // load partials last
    'templates/authorListItem',
    'templates/titleListItem'

], function (

    Handlebars,
    $,
    // _,

    authorSection,
    titleSection,

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
        data = JSON.parse(data);

        var titleHash = {},
            authorHash = {},
            letter = '',
            $main = $('#js-main');

        data.posts.forEach(function(post) {
            post.stars || (post.stars = Math.random() * 5 | 0);
            letter = post.title.charAt(0).toUpperCase();
            titleHash[letter] || (titleHash[letter] = []);
            titleHash[letter].push(post);
        });

        data.posts.forEach(function(post) {
            post.stars || (post.stars = Math.random() * 5 | 0);
            letter = post.author.charAt(post.author.lastIndexOf(' ') + 1).toUpperCase();
            authorHash[letter] || (authorHash[letter] = []);
            authorHash[letter].push(post);
        });

        var keys;

        keys = Object.keys(titleHash);
        keys.sort()
            .forEach(function(key) {
                titleHash[key].sort(function(a, b) {
                    var titleA = a.title;
                    var titleB = b.title;
                    if (titleA > titleB) { return 1; }
                    if (titleA < titleB) { return -1; }
                    return 0;
                });
                $main.append(titleSection({heading: key, content: titleHash[key]}));
            });

        // keys = Object.keys(authorHash);
        // keys.sort()
        //     .forEach(function(key) {
        //         authorHash[key].sort(function(a, b) {
        //             var lastNameA = a.author.substring(a.author.lastIndexOf(' ') + 1);
        //             var lastNameB = b.author.substring(b.author.lastIndexOf(' ') + 1);
        //             if (lastNameA > lastNameB) { return 1; }
        //             if (lastNameA < lastNameB) { return -1; }

        //             var firstNameA = a.author.substring(0, a.author.indexOf(' '));
        //             var firstNameB = b.author.substring(0, b.author.indexOf(' '));
        //             if (firstNameA > firstNameB) { return 1; }
        //             if (firstNameA < firstNameB) { return -1; }

        //             var middleNameA = a.author.substring(a.author.indexOf(' ') + 1, a.author.lastIndexOf(' '));
        //             var middleNameB = b.author.substring(b.author.indexOf(' ') + 1, b.author.lastIndexOf(' '));
        //             if (middleNameA > middleNameB) { return 1; }
        //             if (middleNameA < middleNameB) { return -1; }
        //             return 0;
        //         });
        //         $main.append(authorSection({heading: key, content: authorHash[key]}));
        //     });
    };

});

/* ================================================================================================================== */
