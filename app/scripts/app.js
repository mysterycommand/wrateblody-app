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
    'templates/bookSection',
    'templates/personSection',

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
    peopleByLastNameSection,
    bookSection,
    personSection

) {

    'use strict';

    Handlebars.registerHelper('times', function(n, block) {
        var out = '', i;
        for (i = 0; i < n; ++i) {
            out += block.fn(i);
        }
        return out;
    });

    Handlebars.registerHelper('links', function(resource, list) {
        var links = [];

        list.forEach(function(item) {
            links.push([
                '<a href="#/' + resource + '/' + item.id + '">',
                item.listName,
                '</a>'
            ].join(''));
        });

        /* jshint laxbreak: true */
        return (links.length > 1)
            ? links.slice(0, links.length - 1).join(', ') + ' & ' + links[links.length - 1]
            : links[0];
    });

    Handlebars.registerHelper('eq', function (value, test, block) {
        if (value === test) {
            return block.fn(this);
        } else {
            return block.inverse(this);
        }
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

        var $body = $('#js-body'),
            $main = $('#js-main'),
            bookByTitleHash = {},
            personByLastNameHash = {},
            letter = '',
            keys;

        books.forEach(function(book) {
            var at = 0;
            if (book.title.indexOf('The ') === 0) { at = 4; }
            else if (book.title.indexOf('An ') === 0) { at = 3; }
            else if (book.title.indexOf('A ') === 0) { at = 2; }

            book.edited = book.listBy === 'editors';
            var ppl = book[book.listBy].map(function(personId) {
                var found;
                people.some(function(person) {
                    if (person.id === personId) {
                        found = person; // person.listName;
                        return true;
                    }
                });
                return found;
            });
            ppl.lastIndex = ppl.length - 1;

            if ( ! ppl.length) {
                throw new Error([
                    'There are no authors or editors associated with the book \'',
                    book.title,
                    '\'.'
                ].join(''));
            }

            book.attribution = ppl; // (ppl.length > 1) ?
                // ppl.slice(0, ppl.length - 1).join(', ') + ' & ' + ppl[ppl.length - 1] :
                // ppl[0];

            letter = book.title.charAt(at).toUpperCase();
            bookByTitleHash[letter] || (bookByTitleHash[letter] = []);
            bookByTitleHash[letter].push(book);
        });

        people.forEach(function(person) {
            letter = person.sortName.charAt(0).toUpperCase();
            personByLastNameHash[letter] || (personByLastNameHash[letter] = []);
            personByLastNameHash[letter].push(person);
        });

        keys = Object.keys(bookByTitleHash);
        keys.sort()
            .forEach(function(key) {
                bookByTitleHash[key].sort(function(a, b) {
                    var titleA = a.title;
                    var titleB = b.title;
                    if (titleA > titleB) { return 1; }
                    if (titleA < titleB) { return -1; }
                    return 0;
                });
            });

        keys = Object.keys(personByLastNameHash);
        keys.sort()
            .forEach(function(key) {
                personByLastNameHash[key].sort(function(a, b) {
                    var sortNameA = a.sortName;
                    var sortNameB = b.sortName;
                    if (sortNameA > sortNameB) { return 1; }
                    if (sortNameA < sortNameB) { return -1; }
                    return 0;
                });
            });

        $body
            .on('click', 'a', function(event) {
                var $this = $(this);
                if ($this.attr('href').indexOf('http') === 0) { return; }

                event.preventDefault();
                event.stopPropagation();

                $main.empty();
                $('#js-prev').empty();
                $('#js-next').empty();

                switch (this.hash) {
                case '#/people/AZ':
                    Object.keys(personByLastNameHash)
                        .sort()
                        .forEach(function(key) {
                            $main
                                .append(peopleByLastNameSection({
                                    heading: key,
                                    content: personByLastNameHash[key]
                                }));
                        });
                    break;

                case '#/books/AZ':
                    Object.keys(bookByTitleHash)
                        .sort()
                        .forEach(function(key) {
                            $main
                                .append(booksByTitleSection({
                                    heading: key,
                                    content: bookByTitleHash[key]
                                }));
                        });
                    break;

                default:
                    var match = this.hash.match(/#\/(\w+)\/(\d+)/),
                        found;

                    if (match.length !== 3) {
                        throw new Error([
                            'Invalid path: ',
                            this.hash,
                            '.'
                        ].join(''));
                    }

                    switch (match[1]) {

                    case 'book':
                        var bookId = +match[2];

                        books.some(function(book) {
                            if (book.id === bookId) {
                                found = book;
                                return true;
                            }
                        });

                        $main.append(bookSection(found));
                        break;

                    case 'person':
                        var personId = +match[2];

                        people.some(function(person) {
                            if (person.id === personId) {
                                found = person;
                                found.edited = books.filter(function(book) {
                                    return book.editors.indexOf(personId) > -1;
                                });
                                found.authored = books.filter(function(book) {
                                    return book.authors.indexOf(personId) > -1;
                                });
                                return true;
                            }
                        });

                        $main.append(personSection(found));
                        break;
                    }

                    $('#js-prev').html($('#js-title').html());
                }

                $('a.selected').removeClass('selected');
                $('#js-title').html($this.addClass('selected').clone());
            })
            .find('a')
            .first()
            .click();
    };

});

/* ================================================================================================================== */
