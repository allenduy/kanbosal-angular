'use strict';

/**
 * @ngdoc function
 * @name kanbosalApp.directive:Navbar
 * @description
 * # NavbarDirective
 * Directive of the kanbosalApp
 */
angular.module('kanbosalApp')
  .directive('navbar', function () {
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      scope: {
        data: '='
      }, // {} = isolate, true = child, false/undefined = no change
      // controller: function($scope, $element, $attrs, $transclude) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      templateUrl: 'partials/navbar.html',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      link: function($scope, iElm, iAttrs, controller) {}
    };
  });