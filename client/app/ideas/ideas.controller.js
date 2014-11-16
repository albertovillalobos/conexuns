'use strict';

angular.module('ideaboardApp')
  .controller('IdeasCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    $http.get('/api/ideas/').success(function (ideas) {
        $scope.ideas = ideas;
        console.log($scope.ideas);
    });

  });
