'use strict';

/**
 * @ngdoc function
 * @name kanbosalApp.controller:OverviewController
 * @description
 * # OverviewController
 * Controller of the kanbosalApp
 */
angular.module('kanbosalApp')
  .controller('OverviewController', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.navbar = {
      pageTitle: 'ASU Grant Kanbosal Overview Board',
      menuLeft: [{
        name: '<span class="glyphicon glyphicon-home" aria-hidden="true"></span>',
        href: '/'
      }],
      menuRight: [{
        name: 'John Doe',
      },{
        name: '<img style="max-width:35px; margin-top: -7px;" src="images/github/GitHub-Mark-Light-32px.png">',
        style: 'padding:9px 9px 9px 0;'
      }]
    };
  });
