'use strict';

angular.module('ideaboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hustlers', {
        url: '/people/hustlers',
        templateUrl: 'app/people/hustlers/hustlers.html',
        controller: 'HustlersCtrl'
      });
  });