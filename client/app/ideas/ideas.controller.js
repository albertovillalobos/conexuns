'use strict';

angular.module('ideaboardApp')
  .controller('IdeasCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    $http.get('/api/ideas/').success(function (ideas) {
        $scope.ideas = ideas;
        // console.log($scope.ideas);
        for(var x=0; x<$scope.ideas.length; x++) {
        	// console.log('owner found: '+$scope.ideas[x].owner);
        	var image;

        	$http.get('/api/users/list/'+$scope.ideas[x].owner).success(function (ideaOwner) {
        		// console.log(ideaOwner);
        		// console.log($scope.ideas[x]);
        		// $scope.ideas[x].image = ideaOwner.image;
        		image = ideaOwner.image;
        	})
        	$scope.ideas[x].image = image;
        	console.log($scope.ideas);
        }
    });


  });