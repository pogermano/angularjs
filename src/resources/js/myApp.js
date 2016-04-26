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