'use strict';

// console.log(JSON.stringify({
//     books: [
//         {
//             id: 1,
//             title: 'Yarmulkes & Fitted Caps',
//             imageURLs: { thumb: 'http://writebloody.com/wp-content/uploads/2013/07/Samuels-125x193.png' },
//             authors: [ 1 ],
//             editors: [],
//             listBy: 'authors',
//             links: { 'More …': 'http://writebloody.com/shop/products/yarmulkes-fitted-caps-by-aaron-samuels/' },
//             description: ''
//         }, {
//             id: 2,
//             title: 'The Year of No Mistakes',
//             imageURLs: { thumb: 'http://writebloody.com/wp-content/uploads/2013/07/Cristin-125x193.png' },
//             authors: [ 2 ],
//             editors: [],
//             listBy: 'authors',
//             links: { 'More …': 'http://writebloody.com/shop/products/the-year-of-no-mistakes-by-cristin-okeefe-aptowicz/' },
//             description: ''
//         }, {
//             id: 3,
//             title: 'The Incredible Sestina Anthology',
//             imageURLs: { thumb: 'http://writebloody.com/wp-content/uploads/2013/07/Nester-125x182.png' },
//             authors: [],
//             editors: [ 3 ],
//             listBy: 'editors',
//             links: { 'More …': 'http://writebloody.com/shop/products/the-incredible-sestina-anthology-edited-by-daniel-nester/' },
//             description: ''
//         }
//     ]
// }));

var request = require('request'),
    cheerio = require('cheerio'),
    fs = require('fs'),
    peopleHash = {},
    people = [],
    booksHash = {},
    books = [];

// var test = [
//     'The Year of No Mistakes by Cristin O’Keefe Aptowicz',
//     'The Incredible Sestina Anthology edited by Daniel Nester',
//     'The Year of No Mistakesby Cristin O’Keefe Aptowicz',
//     'The Incredible Sestina Anthologyedited by Daniel Nester',
//     'The Incredible Sestina Anthology',
//     'by Cristin O’Keefe Aptowicz',
//     'edited by Daniel Nester',
//     'Yesterday Won’t Goodbye',
//     'by Brian S. Ellis'
// ];
// test.forEach(function(title) {
//     console.log(title.split(/ ?((?:edited)? ?by) /i));
// });

request('http://writebloody.com/shop/products/', function(error, response, body) {
    if (error) {
        console.log(error);
        return;
    }

    var $ = cheerio.load(body),
        attrExp = / ?((?:edited)? ?by) /i,
        productName,
        attribution,
        productMatch,

        title,
        thumb,
        listBy,
        url,

        listByHash,
        listNames,
        firstName,
        lastName,

        failCount = 0,
        bookCount = 0,
        personCount = 0;

    $('.category-page-lovers').each(function(index, element) {
        // console.log($(element).text());

        productName = $(element).find('.mp_product_name').text();
        productMatch = productName.split(attrExp);

        title = productMatch.shift();

        if ( ! productMatch.length) {
            attribution = $(element).find('.mp_product_content > p > em').text();
            productMatch = attribution.split(attrExp);
            productMatch.shift();
        }

        if ( ! productMatch.length) {
            ++failCount;
            // attribution = $(element).find('.mp_product_content > p').text();
            // productMatch = attribution.split(/ ?((?:edited)? ?by) (.+)\.$/i);
            // console.log(failCount, 'Couldn\'t find an attribution match for:', title);
            // console.log('  tried: / ?((?:edited)? ?by) (.+)\\.$/i');
            // console.log('  found:', productMatch);
            return;
        }

        thumb = $(element).find('.mp_product_image img').attr('src');
        listBy = (productMatch.shift() === 'by') ? 'authors' : 'editors';
        url = $(element).find('.mp_product_image a').attr('href');

        listByHash = {};
        listNames = productMatch.shift();
        listNames.split(' & ').forEach(function(listName) {
            firstName = listName.substr(0, listName.lastIndexOf(' '));
            lastName = listName.substr(listName.lastIndexOf(' ') + 1);

            /* jshint expr: true */
            peopleHash[listName] || (peopleHash[listName] = {
                id: ++personCount,
                firstName: firstName,
                lastName: lastName,
                listName: listName,
                sortName: lastName + ', ' + firstName
            });

            listByHash[listBy] || (listByHash[listBy] = []);
            listByHash[listBy].push(peopleHash[listName].id);
        });

        /* jshint expr: true */
        booksHash[url] || (booksHash[url] = {
            id: ++bookCount,
            title: title,
            imageURLs: {
                thumb: thumb
            },
            authors: listByHash.authors || [],
            editors: listByHash.editors || [],
            listBy: listBy,
            links: {
                'More …': url
            },
            averageRating: 0,
            totalRatings: 0,
            description: ''
        });
    });

    Object.keys(booksHash).forEach(function(key) {
        books.push(booksHash[key]);
    });

    // console.log(bookCount, books.length);
    // console.log(JSON.stringify({
    //     books: books
    // }));
    fs.writeFile('app/scripts/data/books.json', JSON.stringify({
        books: books
    }), function(error) {
        if (error) {
            console.log(error);
            return;
        }
        console.log('app/scripts/data/books.json updated!');
    });

    Object.keys(peopleHash).forEach(function(key) {
        people.push(peopleHash[key]);
    });

    // console.log(personCount, people.length);
    // console.log(JSON.stringify({
    //     people: people
    // }));
    fs.writeFile('app/scripts/data/people.json', JSON.stringify({
        people: people
    }), function(error) {
        if (error) {
            console.log(error);
            return;
        }
        console.log('app/scripts/data/people.json updated!');
    });
});
