define(function(require) {
    'use strict';

    var angular = require('angular');

    require('wb-app');
    require('states');

    require('AppsController');

    console.log('Bootstrap!');
    angular.element(document).ready(function() {
        console.log('Ready!');
        angular.bootstrap(document, ['wb-app']);
    });
});
