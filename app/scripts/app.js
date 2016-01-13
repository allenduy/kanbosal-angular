'use strict';

/**
 * @ngdoc overview
 * @name kanbosalApp
 * @description
 * # kanbosalApp
 *
 * Main module of the application.
 */
angular
  .module('kanbosalApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .when('/overview', {
        templateUrl: 'views/overview.html',
        controller: 'OverviewController',
        controllerAs: 'overview'
      })
      .when('/detail', {
        templateUrl: 'views/detail.html',
        controller: 'DetailController',
        controllerAs: 'detail'
      })
      .otherwise({
        redirectTo: '/'
      });

    // $locationProvider.html5Mode({
    //   enabled: true
    // });
  }]);
