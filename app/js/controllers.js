var stageclapControllers = angular.module('stageclapControllers', []);

stageclapControllers.controller('SplashCtrl', ['$scope',
	function($scope){
		$scope.master = {};

		$scope.save = function(user){
			$scope.master = angular.copy($scope.user);
		};

		$scope.user = angular.copy($scope.master);
	}]);

stageclapControllers.controller('LoginCtrl', ['$scope',
	function($scope){
		$scope.master = {};

		$scope.save = function(user){
			$scope.master = angular.copy($scope.user);
		};
		
		$scope.user = angular.copy($scope.master);
	}]);