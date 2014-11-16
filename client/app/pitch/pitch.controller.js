'use strict';

angular.module('ideaboardApp')
  .controller('PitchCtrl', function ($scope, $http) {
    $scope.message = 'Hello';

 $http.get('/api/users/me').success(function (me) {
      $scope.me = me;
      console.log($scope.me);
      
    });


	$scope.addIdea = function() {


		if($scope.newIdea === '') {
			return;
		}
		$http.post('/api/ideas', { name: $scope.newIdea.title, 
			info: $scope.newIdea.pitch, 
			hacker: $scope.newIdea.hacker, 
			hipster: $scope.newIdea.hipster,
			owner: $scope.me._id 
		});
		$scope.newIdea = '';
	};

  });
