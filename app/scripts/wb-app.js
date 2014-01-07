define(function(require) {
    'use strict';

    var angular = require('angular');

    require('angular-ui-router');

    angular.module('wb-app', [
        'ui.router'
    ])
    .run(function($rootScope, $state, $stateParams) {
        console.log('Run!');

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });
});
