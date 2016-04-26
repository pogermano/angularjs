/* use strict */
var app = angular.module('MyApp', []);

app.directive('walterwhite', function()
{
	// Runs during compile
	return {
		 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		 transclude: true,
		 template: '<h2> TUCA </h2>'
		}
	});

/* use strict */
var app = angular.module("isolateApp", []);

app.controller("AppCtrl", function ($scope, $element)
{
	$scope.getMove = function (name, movetype, move)
	{
		console.log('' + name + ' performed a ' + movetype +
			' ' + move );
	}

	$scope.movetypes 	= ['Finisher', 'Offensive Move', 'Defensive Move'];
	$scope.movetype 	= $scope.movetypes[0];
})

.directive("character", function ()
{
	return {
		restrict: 'E',
		scope: {
			name: "@",
			image: "@",
			movetype: "=",
			useMove: '&'
		},
		templateUrl: 'partials/shield_isolate.html',
		controller: 'AppCtrl'
	}
})