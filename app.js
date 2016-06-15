/**
*  Module
*
* Description
*/
var app = angular.module('ManavyaApp', ['ngRoute']).
	config(['$routeProvider',function($routeProvider) {
		$routeProvider
			.when('/',{
				controller: 'HomePageController',
				templateUrl: 'app/views/HomePage.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);