'use strict';

angular.module('ideaboardApp')
  .controller('PersonCtrl', function ($scope, $stateParams, $http) {
    

    $http.get('/api/users/'+$stateParams.id).success(function (person) {
    	console.log(person);
    	$scope.person = person;
        // $scope.people = people;
        // console.log($scope.people);

    });


    console.log($stateParams);
  });
