'use strict';

var stageclapApp = angular.module('stageclapApp', [
	'ngRoute',
	'stageclapControllers'
]);

stageclapApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/home', {
				templateUrl: 'templates/splash.html',
				controller: 'SplashCtrl'
			}).
			when('/login', {
				templateUrl: 'templates/login.html',
				controller: 'LoginCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]);