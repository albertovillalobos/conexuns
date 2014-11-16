'use strict';

angular.module('ideaboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hackers', {
        url: '/people/hackers',
        templateUrl: 'app/people/hackers/hackers.html',
        controller: 'HackersCtrl'
      });
  });