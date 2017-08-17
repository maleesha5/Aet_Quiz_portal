'use strict';

/**
 * @ngdoc overview
 * @name aeturnumQuizProjectPortalApp
 * @description
 * # aeturnumQuizProjectPortalApp
 *
 * Main module of the application.
 */
angular
    .module('aeturnumQuizProjectPortalApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/login', {
                templateUrl: 'views/signin.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/addQuestion', {
                templateUrl: 'views/addQuestion.html',
                controller: 'questionController',
            })
            .when('/test', {
                templateUrl: 'views/test.html',
                controller: 'TestCtrl',
                controllerAs: 'test'
            })
            .when('/allQuestions', {
                templateUrl: 'views/all_questions.html',
                controller: 'AllQuestionsCtrl',
            })
            .when('/question_paper', {
                templateUrl: 'views/question_paper.html',
                controller: 'QuestionPaperCtrl',
                controllerAs: 'questionPaper'
            })
            .otherwise({
                redirectTo: '/'
            });
    });