angular.module('aeturnumQuizProjectPortalApp')
    .controller('questionController', function($scope, $log, Question, Answer, $http) {

        $scope.question = new Question();
        $scope.answer1 = new Answer();
        $scope.answer2 = new Answer();
        $scope.answer3 = new Answer();
        $scope.answer4 = new Answer();

        $scope.question.answers = [$scope.answer1, $scope.answer2, $scope.answer3, $scope.answer4];

        $scope.save = function(questionPassed) {
            $log.log(questionPassed);
            $log.log(questionPassed.answers.length);

            /* questionEndpoint.saveQuestion(question).then(function(response) {
                 return response;
             })*/

            var saveQuestionUrl = "http://127.0.0.1:9090/Aeturnum_quiz/save_question";
            $http.post(saveQuestionUrl, questionPassed);

        };

        $scope.reset = function() {
            $scope.employee = angular.copy($scope.master);
        };

        $scope.reset();
    })

.service('Question', [function() {

    function Question() {

        this.body = undefined;
        this.category = undefined;
        this.mark = undefined;
        this.answers = [];
        //this.selected = null;
    }

    return Question;

}])

.service('Answer', [function() {

    function Answer() {
        this.body = undefined;
        this.isCorrect = undefined;
    }

    return Answer;

}]);