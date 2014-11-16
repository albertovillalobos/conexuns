'use strict';

angular.module('ideaboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('person', {
        url: '/people/:id',
        templateUrl: 'app/people/person/person.html',
        controller: 'PersonCtrl'
      });
  });