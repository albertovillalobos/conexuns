'use strict';

angular.module('ideaboardApp')
  .controller('PeopleCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    $scope.people = [];

    $scope.hackers = [];
    $scope.hipsters = [];
    $scope.hustlers = [];

    $http.get('/api/users/list').success(function (people) {
        $scope.people = people;
        console.log($scope.people);

        for (var i = $scope.people.length - 1; i >= 0; i--) {
            // console.log(i);
            if ($scope.people[i].archetype == 'hacker') {
                $scope.hackers.push(people[i]);
                // console.log($scope.hackers);
            }

            if ($scope.people[i].archetype == 'hipster') {
                $scope.hipsters.push(people[i]);
                // console.log($scope.hackers);
            }

            if ($scope.people[i].archetype == 'hustler') {
                $scope.hustlers.push(people[i]);
                // console.log($scope.hackers);
            }                        
        }
        console.log($scope.hackers);
        console.log($scope.hipsters);
        console.log($scope.hustlers);
    });

    // // $scope.awesomeThings = [];
    // $scope.people = [];
    // $http.get('/api/people').success(function(people) {
    // 	$scope.people = people;
    //   // $scope.awesomeThings = awesomeThings;
    //   // socket.syncUpdates('thing', $scope.awesomeThings);
    // });



  });
