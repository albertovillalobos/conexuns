'use strict';

angular.module('ideaboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pitch', {
        url: '/pitch',
        templateUrl: 'app/pitch/pitch.html',
        controller: 'PitchCtrl'
      });
  });