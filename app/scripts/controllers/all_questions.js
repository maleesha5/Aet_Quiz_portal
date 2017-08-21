'use strict';

/**
 * @ngdoc function
 * @name aeturnumQuizProjectPortalApp.controller:AllQuestionsCtrl
 * @description
 * # TestCtrl
 * Controller of the aeturnumQuizProjectPortalApp
 */
angular.module('aeturnumQuizProjectPortalApp')
    .controller('AllQuestionsCtrl', function($scope, $http, $uibModal, $log, $document) {

        var url = "http://localhost:9090/Aeturnum_quiz/get_all_questions";

        $http.get(url)
            .then(function(response) {
                $scope.questions = response.data;
            });

        var $ctrl = this;
        $ctrl.items = ['item1', 'item2', 'item3'];

        $ctrl.animationsEnabled = true;

        $scope.open = function(size, parentSelector, questionIndex) {
            console.log(questionIndex);
            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/addQuestion.html',
                controller: 'questionController',
                size: size,
                appendTo: parentElem,
                resolve: {
                    editQuestion: function() {
                        return $scope.questions[questionIndex];
                    }
                }
            });
        }

        /*$scope.questions = [{
                type: "text",
                body: "Whats the Name of first men",
                category: "OOP",
                mark: 10,
                answers: [{
                        body: "John Snow",
                        isCorrect: false
                    },
                    {
                        body: "Daenerys Targaryan",
                        isCorrect: false

                    },
                    {
                        body: "Randall Tarly",
                        isCorrect: true

                    },
                    {
                        body: "Lord Varys",
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                body: "Whats the time now?",
                answers: [{

                        body: "9.15 p.m",
                        isCorrect: true

                    },
                    {
                        body: "5.55 a.m",
                        isCorrect: true

                    },
                    {
                        body: "10.27 p.m",
                        isCorrect: false

                    },
                    {
                        body: "11.55 p.m",
                        isCorrect: false

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                body: "Which is not a Auto mobile brand?",
                answers: [{
                        body: "Honda",
                        isCorrect: true

                    },
                    {
                        body: "Toyota",
                        isCorrect: true

                    },
                    {
                        body: "Apple",
                        isCorrect: false

                    },
                    {
                        body: "Ford",
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: "text",
                body: "How are you feeling Today?",
                answers: [{
                        body: "Felling Fine!",
                        isCorrect: false

                    },
                    {
                        body: "Not Good!",
                        isCorrect: true

                    },
                    {
                        body: "Feeling Sick!",
                        isCorrect: true

                    },
                    {
                        body: "Doing Great!",
                        isCorrect: false

                    }
                ],
                selected: null,
                correct: null
            }
        ];*/

    });