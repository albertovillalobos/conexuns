'use strict';

angular.module('ideaboardApp')
  .controller('HackersCtrl', function ($scope, $http) {
	$scope.message = 'Hello';
	    $scope.people = [];
	    $scope.hackers = [];
	    // $scope.hipsters = [];
	    // $scope.hustlers = [];

	    $http.get('/api/users/list').success(function (people) {
	        $scope.people = people;
	        // console.log($scope.people);

	        for (var i = $scope.people.length - 1; i >= 0; i--) {
	            if ($scope.people[i].archetype == 'hacker') {
	                $scope.hackers.push(people[i]);
	            }
             
	        }
	        // console.log($scope.hackers);
	    });
  });
