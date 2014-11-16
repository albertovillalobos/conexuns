'use strict';

angular.module('ideaboardApp')
  .controller('PeopleCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    $scope.people = [];

    $http.get('/api/users/list').success(function (people) {
        $scope.people = people;
        console.log($scope.people);
    });
    // // $scope.awesomeThings = [];
    // $scope.people = [];
    // $http.get('/api/people').success(function(people) {
    // 	$scope.people = people;
    //   // $scope.awesomeThings = awesomeThings;
    //   // socket.syncUpdates('thing', $scope.awesomeThings);
    // });



  });
