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

    'text!data/books.json',
    'text!data/people.json',

    'templates/booksByTitleSection',
    'templates/peopleByLastNameSection',

    // load partials last
    'templates/bookByTitleListItem',
    'templates/personByLastNameListItem'

], function (

    Handlebars,
    $,
    // _,

    books,
    people,

    booksByTitleSection,
    peopleByLastNameSection

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

    Handlebars.registerHelper('lt', function (value, test, block) {
        if (value < test) {
            return block.fn(this);
        } else {
            return block.inverse(this);
        }
    });

    Handlebars.logger.log = function() {
        console.log(arguments);
    };

    return function() {
        books = JSON.parse(books).books;
        people = JSON.parse(people).people;

        var $main = $('#js-main'),
            bookTitleHash = {},
            personNameHash = {},
            letter = '';

        books.forEach(function(book) {
            var at = 0;
            if (book.title.indexOf('The ') === 0) { at = 4; }
            else if (book.title.indexOf('An ') === 0) { at = 3; }
            else if (book.title.indexOf('A ') === 0) { at = 2; }

            book.edited = book.listBy === 'editors';
            var ppl = book[book.listBy].map(function(personId) {
                var result;
                people.some(function(person) {
                    if (person.id === personId) {
                        result = person.listName;
                        return true;
                    }
                });
                return result;
            });

            if ( ! ppl.length) {
                throw new Error([
                    'There are no authors or editors associated with the book \'',
                    book.title,
                    '\'.'
                ].join(''));
            }

            book.attribution = (ppl.length > 1) ?
                ppl.slice(0, ppl.length - 1).join(', ') + ' & ' + ppl[ppl.length - 1] :
                ppl[0];

            letter = book.title.charAt(at).toUpperCase();
            bookTitleHash[letter] || (bookTitleHash[letter] = []);
            bookTitleHash[letter].push(book);
        });

        people.forEach(function(person) {
            letter = person.sortName.charAt(0).toUpperCase();
            personNameHash[letter] || (personNameHash[letter] = []);
            personNameHash[letter].push(person);
        });

        var keys;

        keys = Object.keys(bookTitleHash);
        keys.sort()
            .forEach(function(key) {
                bookTitleHash[key].sort(function(a, b) {
                    var titleA = a.title;
                    var titleB = b.title;
                    if (titleA > titleB) { return 1; }
                    if (titleA < titleB) { return -1; }
                    return 0;
                });
                // $main.append(booksByTitleSection({heading: key, content: bookTitleHash[key]}));
            });

        keys = Object.keys(personNameHash);
        keys.sort()
            .forEach(function(key) {
                personNameHash[key].sort(function(a, b) {
                    var sortNameA = a.sortName;
                    var sortNameB = b.sortName;
                    if (sortNameA > sortNameB) { return 1; }
                    if (sortNameA < sortNameB) { return -1; }
                    return 0;
                });
                // $main.append(peopleByLastNameSection({heading: key, content: personNameHash[key]}));
            });

        $('#js-footer-nav')
            .on('click', 'a', function(event) {
                event.preventDefault();
                event.stopPropagation();

                $main.empty();

                switch (this.hash) {
                case '#peopleAZ':
                    Object.keys(bookTitleHash)
                        .sort()
                        .forEach(function(key) {
                            $main
                                .append(booksByTitleSection({
                                    heading: key,
                                    content: bookTitleHash[key]
                                }));
                        });
                    break;
                case '#booksAZ':
                    Object.keys(personNameHash)
                        .sort()
                        .forEach(function(key) {
                            $main
                                .append(peopleByLastNameSection({
                                    heading: key,
                                    content: personNameHash[key]
                                }));
                        });
                    break;
                }
            })
            .find('a')
            .first()
            .click();
    };

});

/* ================================================================================================================== */
