 'use strict';

/**
 * @ngdoc function
 * @name jupiterApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the jupiterApp
 */
angular.module('coretechsApp')
  .directive('componentViewPanel', function() {
  	return {
  		restrict: 'E',
//  		require: '^data',
  		scope: {
//      		data: '=',
      		title: '@',
      		item: '@',
      		viewMode: '@'
    	},
    	link: function(scope, element, attrs, controller) {
    	    scope.$watch("item",function(newValue,oldValue) {
//    	    	alert(newValue);
    	    	var templateUrl = 'templates/componentView-template.html';
                var data = $templateCache.get(templateUrl);
                element.html(data);
                $compile(element.contents())(scope);
                scope.$apply();
    	        //This gets called when data changes.
    	    });
    	 },
//    	link: function(scope, element, attrs) {
////    		alert(attrs);
//    		scope.item = item;
//    	},
//      controller: function($scope) {
//        $scope.title="";
//        $scope.item='new item';
//      },
    	templateUrl: 'templates/componentView-template.html' 
  		
  	}
  });
 