'use strict';

angular.module('ideaboardApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.ideas;
    $http.get('/api/ideas/').success(function (ideas) {
      $scope.ideas = ideas;

            // console.log($scope.ideas);
            // for(var x=0; x<$scope.ideas.length; x++) {
            //   // console.log('owner found: '+$scope.ideas[x].owner);
            //   var image;

            //   $http.get('/api/users/list/'+$scope.ideas[x].owner).success(function (ideaOwner) {
            //     // console.log(ideaOwner);
            //     // console.log($scope.ideas[x]);
            //     // $scope.ideas[x].image = ideaOwner.image;
            //     image = ideaOwner.image;
            //   })
            //   $scope.ideas[x].image = image;
            //   console.log($scope.ideas);
            // }
    });


    $scope.delete = function(id) {
        return $http.delete('/api/ideas/' + id);
      // User.remove({ id: user._id });
      // angular.forEach($scope.users, function(u, i) {
      //   if (u === user) {
      //     $scope.users.splice(i, 1);
      //   }
      // });
    };
  });
