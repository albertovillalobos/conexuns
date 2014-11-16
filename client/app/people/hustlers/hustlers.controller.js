'use strict';

angular.module('ideaboardApp')
  .controller('HustlersCtrl', function ($scope, $http) {
	$scope.message = 'Hello';
	    $scope.people = [];
	    $scope.hustlers = [];
	    // $scope.hustlers = [];
	    // $scope.hustlers = [];

	    $http.get('/api/users/list').success(function (people) {
	        $scope.people = people;
	        // console.log($scope.people);

	        for (var i = $scope.people.length - 1; i >= 0; i--) {
	            if ($scope.people[i].archetype == 'hustler') {
	                $scope.hustlers.push(people[i]);
	            }
             
	        }
	        // console.log($scope.hustlers);
	    });
  });
