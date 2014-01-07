define(function(require) {
    'use strict';

    var angular = require('angular');
    require('wb-app');

    angular.module('wb-app').controller('AppsController', function($scope) {
        $scope.apps = [
            'books',
            'videos',
            'on-tour'
        ];
    });
});
