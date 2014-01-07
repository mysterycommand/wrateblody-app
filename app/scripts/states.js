define(function(require) {
    'use strict';

    var angular = require('angular');

    require('wb-app');

    angular.module('wb-app').config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'scripts/templates/index.html'
            })
            .state('books', {
                url: '/books',
                templateUrl: 'scripts/templates/books.html'
            })
            .state('videos', {
                url: '/videos',
                templateUrl: 'scripts/templates/videos.html'
            })
            .state('on-tour', {
                url: '/on-tour',
                templateUrl: 'scripts/templates/on-tour.html'
            });
    });
});
