'use strict';

/**
 * @ngdoc function
 * @name aeturnumQuizProjectPortalApp.controller:QuestionPaperCtrl
 * @description
 * # QuestionPaperCtrl
 * Controller of the aeturnumQuizProjectPortalApp
 */
angular.module('aeturnumQuizProjectPortalApp')
    .controller('QuestionPaperCtrl', function ($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.activeQuestion = undefined;

        $scope.selectAnswer = function (indexChild, indexParent) {
            console.log('Current Index is ' + indexChild);
            console.log('Parent Index is ' + indexParent);

            $scope.questions[indexParent].selected = indexChild;
        };

        $scope.questions = [{
                type: 'text',
                body: 'Whats the Name of first men',
                answers: [{
                        body: 'John Snow',
                        isCorrect: false
                    },
                    {
                        body: 'Daenerys Targaryan',
                        isCorrect: false

                    },
                    {
                        body: 'Randall Tarly',
                        isCorrect: true

                    },
                    {
                        body: 'Lord Varys',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Whats the time now?',
                answers: [{

                        body: '9.15 p.m',
                        isCorrect: true

                    },
                    {
                        body: '5.55 a.m',
                        isCorrect: true

                    },
                    {
                        body: '10.27 p.m',
                        isCorrect: false

                    },
                    {
                        body: '11.55 p.m',
                        isCorrect: false

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'How are you feeling Today?',
                answers: [{
                        body: 'Felling Fine!',
                        isCorrect: false

                    },
                    {
                        body: 'Not Good!',
                        isCorrect: true

                    },
                    {
                        body: 'Feeling Sick!',
                        isCorrect: true

                    },
                    {
                        body: 'Doing Great!',
                        isCorrect: false

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    },
                    {
                        body: 'Honda',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            },
            {
                type: 'text',
                body: 'Which is not a Auto mobile brand?',
                answers: [{
                        body: 'Honda',
                        isCorrect: true

                    },
                    {
                        body: 'Toyota',
                        isCorrect: true

                    },
                    {
                        body: 'Apple',
                        isCorrect: false

                    },
                    {
                        body: 'Ford',
                        isCorrect: true

                    }
                ],
                selected: null,
                correct: null
            }
        ];
    });
