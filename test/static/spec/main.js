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
    /** BEGIN TESTS */
    require('spec/app/AppRouter.test');
    require('spec/app/views/BooksView.test');
    require('spec/app/views/ComingSoonView.test');
    require('spec/app/views/HomeView.test');
    require('spec/app/models/AuthorEditorModel.test');
    require('spec/app/models/BookModel.test');
    require('spec/app/collections/AuthorsEditorsCollection.test');
    require('spec/app/collections/BooksCollection.test');
    require('spec/app/views/AuthorEditorListView.test');
    require('spec/app/views/AuthorEditorItemView.test');
    require('spec/app/views/BookListView.test');
    require('spec/app/views/BookItemView.test');
    require('spec/app/views/BookView.test');
    require('spec/app/views/AuthorEditorView.test');
    require('spec/app/views/NavView.test');
    /** END TESTS */

    window.console = window.console || function() {};
    window.notrack = true;
    window.mocha.run();
});
