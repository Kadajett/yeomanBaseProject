'use strict';

/**
 * @ngdoc function
 * @name yeomanBaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanBaseApp
 */
angular.module('yeomanBaseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
