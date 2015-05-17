'use strict';

/**
 * @ngdoc function
 * @name yeomanBaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanBaseApp
 */
angular.module('yeomanBaseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
