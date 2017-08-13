'use strict';

/**
 * @ngdoc directive
 * @name aeturnumQuizProjectPortalApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('aeturnumQuizProjectPortalApp')
  .directive('myDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDirective directive');
      }
    };
  });
