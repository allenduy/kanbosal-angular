'use strict';

/**
 * @ngdoc function
 * @name kanbosalApp.controller:DetailController
 * @description
 * # DetailController
 * Controller of the kanbosalApp
 */
angular.module('kanbosalApp')
  .controller('DetailController', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.navbar = {
      pageTitle: 'kanbosal',
      menuLeft: [{
        name: '<span class="glyphicon glyphicon-home" aria-hidden="true"></span>',
        href: '/'
      },{
        name: 'new card',
        dataToggle: 'modal',
        dataTarget: '#cardGen',
        href: 'javascript:void(0)'
      }],
      menuRight: [{
        name: 'John Doe',
      },{
        name: '<img style="max-width:35px; margin-top: -7px;" src="images/github/GitHub-Mark-Light-32px.png">',
        style: 'padding:9px 9px 9px 0;'
      }]
    };
  });
