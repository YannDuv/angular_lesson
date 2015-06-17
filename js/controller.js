'use strict';

var myController = function($scope) {
  $scope.hello = "Hello World";
};

angular.module('myApp').controller('myController', ['$scope', myController]);
