angular.module('aeturnumQuizProjectPortalApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p> <my-directive></my-directive>"
  );


  $templateCache.put('views/addQuestion.html',
    "<form class=\"form-horizontal\" role=\"form\"> <h2>Add Question</h2> <div class=\"form-group\"> <label for=\"email\" class=\"col-sm-3 control-label\">Question</label> <div class=\"col-sm-8\"> <textarea class=\"form-control\" placeholder=\"Enter Question\" ng-model=\"question.body\" autofocus></textarea> </div> </div> <div class=\"form-group\" ng-repeat=\"answer in question.answers\"> <label for=\"firstAnwer\" class=\"col-sm-3 control-label\">Answer {{$index+1}}</label> <div class=\"col-sm-8\"> <input type=\"text\" id=\"\" placeholder=\"Enter Answer {{$index+1}}\" class=\"form-control\" ng-model=\"answer.body\"> </div> <div class=\"col-sm-1\"> <div class=\"checkbox\"> <input type=\"checkbox\" id=\"answercheckbox\" value=\"\" ng-model=\"answer.isCorrect\"> </div> </div> </div> <div class=\"form-group\"> <label for=\"category\" class=\"col-sm-3 control-label\">Category</label> <div class=\"col-sm-8\"> <select id=\"category\" class=\"form-control\" ng-model=\"question.category\"> <option>IQ</option> <option>OOP</option> <option>Database</option> <option>QA</option> <option>Other</option> </select> </div> </div> <div class=\"form-group\"> <label for=\"firstAnwer\" class=\"col-sm-3 control-label\">Mark</label> <div class=\"col-sm-4\"> <input type=\"number\" id=\"mark\" class=\"form-control\" ng-model=\"question.mark\"> </div> </div> <div class=\"form-group\"> <div class=\"col-sm-8 col-sm-offset-3\"> <button type=\"submit\" class=\"btn btn-primary btn-block\" ng-click=\"save(question)\">Save</button> </div> </div> <!-- /form --> </form>  <link href=\"styles/register.css\" rel=\"stylesheet\">"
  );


  $templateCache.put('views/all_questions.html',
    "<div ng-controller=\"AllQuestionsCtrl as controller\"> <form class=\"form-inline well well-sm clearfix\"> <span class=\"glyphicon glyphicon-search\"></span> <input type=\"text\" placeholder=\"Search..\" class=\"form-control\" ng-model=\"search\"> </form> <div class=\"row\"> <div class=\"col-sm-12\" ng-repeat=\"question in questions | filter:search\"> <div class=\"well well-sm\"> <div class=\"row\"> <div class=\"col-sm-12\"> <h4>{{$index + 1}}. {{question.body}}</h4> <div ng-repeat=\"answer in question.answers\"> <div class=\"row\"> <div class=\"col-sm-12\"> <p class=\"answerEdit\">{{$index + 1}}. {{answer.body}}</p> </div> </div> </div> <button class=\"btn btn-primary pull-right\" ng-click=\"open(null, null, $index)\">Edit</button> </div> </div> </div> </div> </div> <div class=\"modal\" id=\"question-info\"> <div class=\"modal-dialog\"> <div class=\"modal-content\"> <div class=\"modal-heder\"> <h2></h2> </div> <div class=\"modal-body\"> </div> </div> </div> </div> </div>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"jumbotron\"> <h1>'Allo, 'Allo!</h1> <p class=\"lead\"> <img src=\"images/yeoman.png\" alt=\"I'm Yeoman\"><br> Always a pleasure scaffolding your apps. </p> <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/about\">Splendid!<span class=\"glyphicon glyphicon-ok\"></span></a></p> </div> <div class=\"row marketing\"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>"
  );


  $templateCache.put('views/question_paper.html',
    "<div ng-controller=\"QuestionPaperCtrl as controller\"> <nav class=\"navbar navbar-default navbar-fixed-top\"> <div class=\"container-fluid\"> <div class=\"row\"> <div class=\"col-sm-10\"> <h4>Progress:</h4> <div class=\"btn-toolbar btn-group-sm\" role=\"toolbar\" aria-label=\"...\"> <div class=\"btn-group\" role=\"group\" aria-label=\"...\"> <button type=\"button\" ng-repeat=\"question in questions\" class=\"btn btn-default\" ng-class=\"{'btn btn-warning': question.selected !== null}\"> {{$index+1}} </button> </div> </div> </div> <div class=\"col-sm-2\"> <label>Time Left: <timer countdown=\"59\" interval=\"1000\" finish-callback=\"$ctrl.open()\">{{seconds}} second{{secondsS}}</timer> </label> </div> </div> </div> </nav> <div class=\"navbarmargin\"> <div class=\"row\"> <h3>Question:</h3> <div class=\"well well-sm\" ng-repeat=\"question in questions\"> <div class=\"row\"> <div class=\"col-xs-12\"> <h4>{{$index+1}}. {{question.body}}</h4> <div class=\"row\"> <div class=\"col-sm-6\" ng-repeat=\"answer in question.answers\"> <h4 class=\"answer\" ng-class=\"{'bg-primary':question.selected === $index}\" ng-click=\"selectAnswer($index, $parent.$index)\">{{answer.body}}</h4> </div> </div> </div> </div> </div> </div> </div> </div>"
  );


  $templateCache.put('views/register.html',
    "<!DOCTYPE html> <head> <!-- Custom styles for this template --> <link href=\"register.css\" rel=\"stylesheet\"> </head> <body> <div class=\"container\"> <form class=\"form-horizontal\" role=\"form\"> <h2>Registration Form</h2> <div class=\"form-group\"> <label for=\"firstName\" class=\"col-sm-3 control-label\">Full Name</label> <div class=\"col-sm-9\"> <input type=\"text\" id=\"firstName\" placeholder=\"Full Name\" class=\"form-control\" autofocus> <span class=\"help-block\">Last Name, First Name, eg.: Smith, Harry</span> </div> </div> <div class=\"form-group\"> <label for=\"email\" class=\"col-sm-3 control-label\">Email</label> <div class=\"col-sm-9\"> <input type=\"email\" id=\"email\" placeholder=\"Email\" class=\"form-control\"> </div> </div> <div class=\"form-group\"> <label for=\"password\" class=\"col-sm-3 control-label\">Password</label> <div class=\"col-sm-9\"> <input type=\"password\" id=\"password\" placeholder=\"Password\" class=\"form-control\"> </div> </div> <div class=\"form-group\"> <label for=\"birthDate\" class=\"col-sm-3 control-label\">Date of Birth</label> <div class=\"col-sm-9\"> <input type=\"date\" id=\"birthDate\" class=\"form-control\"> </div> </div> <!-- /.form-group --> <div class=\"form-group\"> <label class=\"control-label col-sm-3\">Gender</label> <div class=\"col-sm-6\"> <div class=\"row\"> <div class=\"col-sm-4\"> <label class=\"radio-inline\"> <input type=\"radio\" id=\"femaleRadio\" value=\"Female\">Female </label> </div> <div class=\"col-sm-4\"> <label class=\"radio-inline\"> <input type=\"radio\" id=\"maleRadio\" value=\"Male\">Male </label> </div> <div class=\"col-sm-4\"> <label class=\"radio-inline\"> <input type=\"radio\" id=\"uncknownRadio\" value=\"Unknown\">Unknown </label> </div> </div> </div> </div> <!-- /.form-group --> <div class=\"form-group\"> <label class=\"control-label col-sm-3\">Meal Preference</label> <div class=\"col-sm-9\"> <div class=\"checkbox\"> <label> <input type=\"checkbox\" id=\"calorieCheckbox\" value=\"Low calorie\">Low calorie </label> </div> <div class=\"checkbox\"> <label> <input type=\"checkbox\" id=\"saltCheckbox\" value=\"Low salt\">Low salt </label> </div> </div> </div> <!-- /.form-group --> <div class=\"form-group\"> <div class=\"col-sm-9 col-sm-offset-3\"> <div class=\"checkbox\"> <label> <input type=\"checkbox\">I accept <a href=\"#\">terms</a> </label> </div> </div> </div> <!-- /.form-group --> <div class=\"form-group\"> <div class=\"col-sm-9 col-sm-offset-3\"> <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button> </div> </div> </form> <!-- /form --> </div> </body> "
  );


  $templateCache.put('views/signin.html',
    "<div class=\"container\"> <form class=\"form-signin\"> <h2 class=\"form-signin-heading\">Please sign in</h2> <img src=\"images/logo.png\" alt=\"I'm Yeoman\"> <label for=\"inputEmail\" class=\"sr-only\">Email address</label> <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus> <label for=\"inputPassword\" class=\"sr-only\">Password</label> <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required> <div class=\"checkbox\"> <label> <input type=\"checkbox\" value=\"remember-me\"> Remember me </label> </div> <button class=\"btn btn-lg btn-warning btn-block\" type=\"submit\">Sign in</button> </form> </div> <link href=\"styles/signin.css\" rel=\"stylesheet\">"
  );


  $templateCache.put('views/test.html',
    "<div ng-controller=\"TestCtrl as $ctrl\" class=\"modal-demo\"> <p>This is the test view.</p> <timer countdown=\"59\" interval=\"1000\" finish-callback=\"$ctrl.open()\">{{seconds}} second{{secondsS}}</timer> <!-- ************************************************ --> <button type=\"button\" class=\"btn btn-default\" ng-click=\"$ctrl.open()\">Open me!</button> </div>"
  );

}]);
