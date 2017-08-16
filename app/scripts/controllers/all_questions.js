'use strict';

/**
 * @ngdoc function
 * @name aeturnumQuizProjectPortalApp.controller:AllQuestionsCtrl
 * @description
 * # TestCtrl
 * Controller of the aeturnumQuizProjectPortalApp
 */
angular.module('aeturnumQuizProjectPortalApp')
    .controller('AllQuestionsCtrl', function($scope, $http) {

        var url = "http://localhost:9090/Aeturnum_quiz/get_all_questions";

        $http.get(url)
            .then(function(response) {
                $scope.questionsList = response.data;
            });

    });