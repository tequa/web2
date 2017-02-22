 'use strict';

/**
 * @ngdoc function
 * @name jupiterApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the jupiterApp
 */
angular.module('coretechsApp')
  .directive('contentPane', function(Hvb) {
  	return {
  		restrict: 'E',
  		require: '^data',
  		transclude: true,
  		scope: {
      		data: '=',
      		title: '@',
      		template: '@'
      		
    	},
      controller: function($scope) {
        $scope.title="";
        $scope.Hvb = Hvb;
        
      },
      
      template: '<div ng-include="template"></div>',
//    	templateUrl: 'templates/contentPane-template.html' 
      compile: function(element, attrs, linker) {
          return function(scope, element) {
            linker(scope, function(clone) {
              element.append(clone);
            });
          };
      }
    };
  });