define(function(require) {
    'use strict';

    var angular = require('angular');

    return angular.module('app').config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('index', {
                url: '/',
                template: require('text!templates/index.html')
            });
    });
});
