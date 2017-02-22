'use strict';

/**
 * @ngdoc overview
 * @name coretechsApp
 * @description
 * # coretechsApp
 *
 * Main module of the application.
 */

angular
  .module('coretechsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'nvd3',
    'ngMdIcons',
    'md.data.table'
    
  ])
  .config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('orange');
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
//      .when('/catalog', {
//        templateUrl: 'views/catalog.html',
//        controller: 'CatalogCtrl'
//      })
//     .when('/player', {
//        templateUrl: 'views/player.html',
//        controller: 'PlayerCtrl',
//        controllerAs: 'controller',
//        // css: ['styles/main.css','styles/player.css']
//      })
//      .when('/content', {
//        templateUrl: 'views/content.html',
//        controller: 'CourseCtrl'
//      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  
//  .run(function(editableOptions) {
//    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
//  });
//  .constant('treeConfig', {
//      treeClass: 'angular-ui-tree',
//      emptyTreeClass: 'angular-ui-tree-empty',
//      hiddenClass: 'angular-ui-tree-hidden',
//      nodesClass: 'angular-ui-tree-nodes',
//      nodeClass: 'angular-ui-tree-node',
//      handleClass: 'angular-ui-tree-handle',
//      placeholderClass: 'angular-ui-tree-placeholder',
//      dragClass: 'angular-ui-tree-drag',
//      dragThreshold: 3,
//      levelThreshold: 30
//    });

