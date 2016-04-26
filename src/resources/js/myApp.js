/* use strict */
var app = angular.module('MyApp', []);

app.directive('walterwhite', function()
{
	return {
		 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		 transclude: true,
		 link: function(scope,element,attribute){
		 	console.log(scope);
		 	console.log(element);
		 	console.log(attribute);
		 }
		 		} 
	/*return {
		 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		 transclude: true,
		 template: '<h2> TUCA </h2>'
		} */
	});