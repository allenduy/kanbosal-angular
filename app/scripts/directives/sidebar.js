'use strict';

/**
 * @ngdoc function
 * @name kanbosalApp.directive:Sidebar
 * @description
 * # SidebarDirective
 * Directive of the kanbosalApp
 */
angular.module('kanbosalApp')
  .directive('sidebar', function () {
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      controller: function($scope, $element, $attrs, $transclude) {
        $scope.toggled = true;
        $scope.toggle = function () {
          $scope.toggled = !$scope.toggled;
        };
        $scope.grants = {
          "Grants": [{
            "Grant_Name": "NSF Career",
            "Grant_Columns": [{
              "Column_Name": "To Do",
              "Cards": [{
                "Card_Name": "Cover Sheet",
                "Modal_ID": "Cover_Sheet",
                "Modal_Body": "<h3>Required</h3><ul><li><b>Program Solicitation Number</b></li><li><b>NSF Unit of Consideration</b></li><li><b>Project Title</b></li><li><b>Co-PIs</b></li><li><b>PI eligibility information</b></li></ul>",
                "Document_Link": "http://www.github.com"
              }, {
                "Card_Name": "Project Description",
                "Modal_ID": "Project_Description",
                "Modal_Body": "<h3>Required</h3><ul><li><b>Program Solicitation Number</b></li><li><b>NSF Unit of Consideration</b></li><li><b>Project Title</b></li><li><b>Co-PIs</b></li><li><b>PI eligibility information</b></li></ul>",
                "Document_Link": "http://www.github.com"
              }, {
                "Card_Name": "Budget",
                "Modal_ID": "Budget",
                "Modal_Body": "<h3>Required</h3><ul><li><b>Program Solicitation Number</b></li><li><b>NSF Unit of Consideration</b></li><li><b>Project Title</b></li><li><b>Co-PIs</b></li><li><b>PI eligibility information</b></li></ul>",
                "Document_Link": "http://www.github.com"
              }, {
                "Card_Name": "Budget Justification",
                "Modal_ID": "Budget_Justification",
                "Modal_Body": "<h3>Required</h3><ul><li><b>Program Solicitation Number</b></li><li><b>NSF Unit of Consideration</b></li><li><b>Project Title</b></li><li><b>Co-PIs</b></li><li><b>PI eligibility information</b></li></ul>",
                "Document_Link": "http://www.github.com"
              }]
            }, {
              "Column_Name": "In Progress",
              "Cards": [{
                "Card_Name": "References Cited",
                "Modal_ID": "References_Cited",
                "Modal_Body": "<h3>Required</h3><ul><li><b>Program Solicitation Number</b></li><li><b>NSF Unit of Consideration</b></li><li><b>Project Title</b></li><li><b>Co-PIs</b></li><li><b>PI eligibility information</b></li></ul>",
                "Document_Link": "http://www.github.com",
                "Assigned_People": ["Waffles", "Waffles"]
              }, {
                "Card_Name": "Biosketch",
                "Modal_ID": "Biosketch",
                "Modal_Body": "<h3>Required</h3><ul><li><b>Program Solicitation Number</b></li><li><b>NSF Unit of Consideration</b></li><li><b>Project Title</b></li><li><b>Co-PIs</b></li><li><b>PI eligibility information</b></li></ul>",
                "Document_Link": "http://www.github.com",
                "Assigned_People": ["Waffles"]
              }]
            }, {
              "Column_Name": "Complete",
              "Cards": [{
                "Card_Name": "Departmental Letter",
                "Modal_ID": "Departmental_Letter",
                "Modal_Body": "<h3>Required</h3><ul><li><b>Program Solicitation Number</b></li><li><b>NSF Unit of Consideration</b></li><li><b>Project Title</b></li><li><b>Co-PIs</b></li><li><b>PI eligibility information</b></li></ul>",
                "Document_Link": "http://www.github.com",
                "Assigned_People": ["Waffles"],
                "Tag_List": ["Under Review", "Complete"]
              }]
            }]
          }, {
            "Grant_Name": "NSF Career Copy",
            "Grant_Columns": [{
              "Column_Name": "To Do",
              "Cards": [{
                "Card_Name": "Cover Sheet",
                "Modal_ID": "Cover_Sheet",
                "Modal_Body": "<h3>Required</h3><ul><li><b>Program Solicitation Number</b></li><li><b>NSF Unit of Consideration</b></li><li><b>Project Title</b></li><li><b>Co-PIs</b></li><li><b>PI eligibility information</b></li></ul>",
                "Document_Link": "http://www.github.com"
              }, {
                "Card_Name": "Project Description",
                "Modal_ID": "Project_Description",
                "Modal_Body": "<h3>Required</h3><ul><li><b>Program Solicitation Number</b></li><li><b>NSF Unit of Consideration</b></li><li><b>Project Title</b></li><li><b>Co-PIs</b></li><li><b>PI eligibility information</b></li></ul>",
                "Document_Link": "http://www.github.com"
              }, {
                "Card_Name": "Budget",
                "Modal_ID": "Budget",
                "Modal_Body": "<h3>Required</h3><ul><li><b>Program Solicitation Number</b></li><li><b>NSF Unit of Consideration</b></li><li><b>Project Title</b></li><li><b>Co-PIs</b></li><li><b>PI eligibility information</b></li></ul>",
                "Document_Link": "http://www.github.com"
              }, {
                "Card_Name": "Budget Justification",
                "Modal_ID": "Budget_Justification",
                "Modal_Body": "<h3>Required</h3><ul><li><b>Program Solicitation Number</b></li><li><b>NSF Unit of Consideration</b></li><li><b>Project Title</b></li><li><b>Co-PIs</b></li><li><b>PI eligibility information</b></li></ul>",
                "Document_Link": "http://www.github.com"
              }]
            }, {
              "Column_Name": "In Progress",
              "Cards": [{
                "Card_Name": "References Cited",
                "Modal_ID": "References_Cited",
                "Modal_Body": "<h3>Required</h3><ul><li><b>Program Solicitation Number</b></li><li><b>NSF Unit of Consideration</b></li><li><b>Project Title</b></li><li><b>Co-PIs</b></li><li><b>PI eligibility information</b></li></ul>",
                "Document_Link": "http://www.github.com",
                "Assigned_People": ["Waffles", "Waffles"]
              }, {
                "Card_Name": "Biosketch",
                "Modal_ID": "Biosketch",
                "Modal_Body": "<h3>Required</h3><ul><li><b>Program Solicitation Number</b></li><li><b>NSF Unit of Consideration</b></li><li><b>Project Title</b></li><li><b>Co-PIs</b></li><li><b>PI eligibility information</b></li></ul>",
                "Document_Link": "http://www.github.com",
                "Assigned_People": ["Waffles"]
              }]
            }, {
              "Column_Name": "Complete",
              "Cards": [{
                "Card_Name": "Departmental Letter",
                "Modal_ID": "Departmental_Letter",
                "Modal_Body": "<h3>Required</h3><ul><li><b>Program Solicitation Number</b></li><li><b>NSF Unit of Consideration</b></li><li><b>Project Title</b></li><li><b>Co-PIs</b></li><li><b>PI eligibility information</b></li></ul>",
                "Document_Link": "http://www.github.com",
                "Assigned_People": ["Waffles"],
                "Tag_List": ["Under Review", "Complete"]
              }]
            }]
          }]
        };
      },
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Message
      templateUrl: 'partials/sidebar.html',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      link: function($scope, iElm, iAttrs, controller) {
      }
    };
  });