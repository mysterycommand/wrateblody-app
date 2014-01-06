define(function(require) {
    'use strict';

    var angular = require('angular');

    require('app');
    require('states');

    console.log('Bootstrap!');
    angular.element(document).ready(function() {
        console.log('Ready!');
        angular.bootstrap(document, ['app']);
    });

    // angular.bootstrap(document, ['app']);
});
