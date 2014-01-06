'use strict';

require.config({

    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',

        'text': '../bower_components/requirejs-text/text'
    },

    shim: {
        'angular': { exports: 'angular' },
        'angular-ui-router': [ 'angular' ]
    },

    deps: [ 'bootstrap' ]
});
