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

    $scope.selectAnswer = function(indexChild, indexParent){
      console.log("Current Index is " + indexChild);
      console.log("Parent Index is " + indexParent);

      $scope.questions[indexParent].selected = indexChild;
      
    }

    $scope.questions =[ {
      type: "text",
      text: "Whats the Name of first men",
      answers: [
        {
          answer : "John Snow"
        },
        {
          answer : "Daenerys Targaryan"
        },
        {
          answer : "Randall Tarly"
        },
        {
          answer : "Lord Varys"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: "Whats the time now?",
      answers: [
        {
          answer : "9.15 p.m"
        },
        {
          answer : "5.55 a.m"
        },
        {
          answer : "10.27 p.m"
        },
        {
          answer : "11.55 p.m"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: "Which is not a Auto mobile brand?",
      answers: [
        {
          answer : "Honda"
        },
        {
          answer : "Toyota"
        },
        {
          answer : "Apple"
        },
        {
          answer : "Ford"
        }
      ],
      selected: null,
      correct: null
    },
    {
      type: "text",
      text: "How are you feeling Today?",
      answers: [
        {
          answer : "Felling Fine!"
        },
        {
          answer : "Not Good!"
        },
        {
          answer : "Fucked UP!"
        },
        {
          answer : "Doing Great!"
        }
      ],
      selected: null,
      correct: null
    }
  ];

  });
