'use strict';

angular.module('ideaboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hipsters', {
        url: '/people/hipsters',
        templateUrl: 'app/people/hipsters/hipsters.html',
        controller: 'HipstersCtrl'
      });
  });