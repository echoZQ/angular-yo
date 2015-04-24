'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp').
    controller('MainCtrl', function ($scope, localStorageService) {
        var todosInStore = localStorageService.get("todos");
        $scope.todos = todosInStore && todosInStore.split('\n') || [];
        $scope.$watch('todos', function () {
            localStorageService.add("todos", $scope.todos.join('\n'));
        }, true);
        /**
         * 添加事件才
         */
        $scope.addTodo = function () {
            var repeatFlag = false,
                i;
            for (i in $scope.todos) {
                if ($scope.todos[i] === $scope.todo) {
                    repeatFlag = true;
                }
            }

            if (!repeatFlag) {
                $scope.todos.push($scope.todo);
            }

            $scope.todo = "";
        };
        /**
         * 删除事件
         */
        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };
    });
