angular.module('aeturnumQuizProjectPortalApp')
    .controller('questionController', ($scope, $log, Question, Answer, $http, editQuestion) => {
        console.log(`addQuestionCntrl ${editQuestion}`);

        $scope.question = new Question();

        if (editQuestion === null) {
            $scope.question.answers = [new Answer(), new Answer(), new Answer(), new Answer()];

            console.log('******');
            console.log($scope.question.answers);
        } else {
            $scope.question = editQuestion;
        }

        $scope.save = function (questionPassed) {
            $log.log(questionPassed);
            $log.log(questionPassed.answers.length);

            const saveQuestionUrl = 'https://aeturnum_quiz.cfapps.io/Aeturnum_quiz/save_question';
            $http.post(saveQuestionUrl, questionPassed);
        };

        $scope.reset = function () {
            $scope.employee = angular.copy($scope.master);
        };

        $scope.reset();
    })

.service('Question', [function () {
    function Question() {
        this.body = undefined;
        this.type = undefined;
        this.category = undefined;
        this.mark = undefined;
        this.answers = [];
        this.selected = null;
    }

    return Question;
}])

.service('Answer', [function () {
    function Answer() {
        this.body = undefined;
        this.isCorrect = false;
    }

    return Answer;
}]);
