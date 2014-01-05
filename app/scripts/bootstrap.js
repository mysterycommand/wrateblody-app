define(function(require) {
    'use strict';

    var angular = require('angular');
    require('angular-ui-router');

    require('app');
    require('states');

    console.log('Got here.');
    angular.element(document).ready(function() {
        console.log('It worked!');
        angular.bootstrap(document, ['app']);
    });

    // require('domReady')(function(document) {
    //     angular.bootstrap(document, ['app']);
    // });
});
