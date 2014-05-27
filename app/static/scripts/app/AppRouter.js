/** ================================================================================================================ **/
/**
 * @fileOverview
 *
 * @author Matt Hayes <matt@mysterycommand.com>
 * @version 0.1.1
 */
/** ================================================================================================================ **/

'use strict';

define(function(require) {
    var Bb = require('backbone');

    /* MODELS */
    var AuthorsEditorsCollection = require('app/collections/AuthorsEditorsCollection');
    var BooksCollection = require('app/collections/BooksCollection');

    var authorsEditorsJSON = require('text!app/data/authorsEditors.json');
    var booksJSON = require('text!app/data/books.json');

    var authorsEditorsCollection = new AuthorsEditorsCollection();
    var booksCollection = new BooksCollection();

    authorsEditorsCollection.reset(JSON.parse(authorsEditorsJSON).authorsEditors);
    booksCollection.reset(JSON.parse(booksJSON).books);

    /* VIEWS */
    var HomeView = require('app/views/HomeView');
    var BooksView = require('app/views/BooksView');
    var BookView = require('app/views/BookView');
    var AuthorEditorView = require('app/views/AuthorEditorView');
    var ComingSoonView = require('app/views/ComingSoonView');

    var view;

    var AppRouter = Bb.Router.extend({
        routes: {
            '': 'home',
            'books(/:by)(/:authorEditorOrTitle)': 'books',
            'videos': 'videos',
            'tour-dates': 'tourDates'
        },

        home: function() {
            if (!! view) { view.$el.off(); }
            view = new HomeView();
            view.render();
        },

        books: function(by, authorEditorOrTitle) {
            if (!! view) { view.$el.off(); }

            if (! by || (by && ! authorEditorOrTitle)) {
                /* jshint expr: true*/
                by || (by = 'by-author');
                Bb.history.navigate('books/' + by, { replace: true });

                view = new BooksView({
                    authorsEditors: authorsEditorsCollection,
                    books: booksCollection
                });
            } else {
                switch(by) {
                    case 'by-author':
                        view = new AuthorEditorView({
                            model: authorsEditorsCollection.findWhere({slug: authorEditorOrTitle})
                        });
                        break;

                    case 'by-title':
                        view = new BookView({
                            model: booksCollection.findWhere({slug: authorEditorOrTitle})
                        });
                        break;
                }
            }

            view.render();
        },

        videos: function() {
            if (!! view) { view.$el.off(); }
            view = new ComingSoonView();
            view.render();
        },

        tourDates: function() {
            if (!! view) { view.$el.off(); }
            view = new ComingSoonView();
            view.render();
        }
    });

    return AppRouter;
});
