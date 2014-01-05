define(function(require) {
    'use strict';

    var angular = require('angular');

    console.log('app');
    return angular.module('app', ['ui.router'])
        .run(function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        });
});
