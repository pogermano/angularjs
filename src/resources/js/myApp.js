/* use strict */
var app = angular.module('MyApp', []);

app.directive('interactiveBtn', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			iElm.bind('mouseenter',function(){
				console.log("Teste1");
				console.log(iElm);
				iElm[0].innerText="Entrou";
			})
				iElm.bind('mouseleave',function(){
				console.log("Teste1");
				console.log(iElm);
				iElm[0].innerText="Saiu";
			});
		}
	};
});

/*app.directive('walterwhite', function()
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
		} * /
	});*/