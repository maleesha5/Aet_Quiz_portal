'use strict';

/**
 * @ngdoc function
 * @name aeturnumQuizProjectPortalApp.controller:AllQuestionsCtrl
 * @description
 * # TestCtrl
 * Controller of the aeturnumQuizProjectPortalApp
 */
angular.module('aeturnumQuizProjectPortalApp')
  .controller('AllQuestionsCtrl', function () {
    this.view = function(question){
        this.activeQuestion = question;
    }

    var object = {
        
        "body":"John",
        "isCorrect":true,
        "answers": {
            "answer1":"Ford",
            "answer2":"BMW",
            "answer3":"Fiat"
        }
    
     }

     var object2 = {
        
        "body":"Danaeris",
        "isCorrect":false,
        "answers": {
            "answer1":"taygaeryan",
            "answer2":"fidget",
            "answer3":"spinner"
        }
    
     }

     this.models = [object, object2];
     //console.log(this.models)
  });
