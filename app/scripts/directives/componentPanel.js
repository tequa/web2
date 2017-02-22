 'use strict';

/**
 * @ngdoc function
 * @name jupiterApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the jupiterApp
 */
angular.module('coretechsApp')
  .directive('componentPanel', function() {
  	return {
  		restrict: 'E',
  		require: '^data',
  		scope: {
      		data: '=',
      		title: '@'
      		
    	},
      controller: function($scope) {
        $scope.title="";
      },
      

    	templateUrl: 'templates/component-template.html' 
  		
  	}
  });