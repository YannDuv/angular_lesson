'use strict';

var myController = function($scope, $http) {

  // Do not forget to check if the server is open and if it's the right URL
  var serverUrl = 'http://10.32.24.174:8080';

  // Function that ask the server the list of todos
  $scope.list = function() {
    $http.get(serverUrl+'/todos')
      .success(function(data) {
        $scope.todos = data;
      })
      .error(function(err) {
        console.error(err);
      });
  };

  // Function that ask the server to create a new todo
  $scope.create = function() {
    $http.post(serverUrl+'/todo', $scope.myNewTodo)
      .success(function(data) {

        // If success, we update the todo list
        $scope.list();
      })
      .error(function(err) {
        console.error(err);
      });
  };

  // Function that delete from the server one todo from it's id
  $scope.delete = function(todoId) {
    $http.delete(serverUrl+'/todo/'+todoId)
      .success(function(data) {

        // If success, we update the todo list
        $scope.list()
      })
      .error(function(err) {
        console.error(err);
      });
  };

  // At the document creation, we ask for the todo list
  $scope.list();
};

angular.module('myApp').controller('myController', ['$scope', '$http', myController]);
