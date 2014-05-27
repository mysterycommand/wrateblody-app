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

    var BookModel = Bb.Model.extend({
        defaults: {
            id: 0,
            title: '',
            description: '',
            averageRating: 0,
            totalRatings: 0,
            url: '',

            coverImageURL: '',
            authorIds: [],
            editorIds: [],
            listBy: '',

            slug: ''
        }
    });
    return BookModel;
});
