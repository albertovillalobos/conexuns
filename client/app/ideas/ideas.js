'use strict';

angular.module('ideaboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ideas', {
        url: '/ideas',
        templateUrl: 'app/ideas/ideas.html',
        controller: 'IdeasCtrl'
      });
  });