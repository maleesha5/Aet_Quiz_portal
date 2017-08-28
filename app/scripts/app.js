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
        'ui.bootstrap',
        'timer',
        'ui.router'
    ])
    .config(function($stateProvider) {
        $stateProvider
            .state('test', {
                url: '/test',
                templateUrl: 'views/test.html',
                controller: 'TestCtrl',
                controllerAs: 'test'

            })
        .state('/', {
            url: '/',            
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .state('/about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
        .state('/login', {
            url: '/login',            
            templateUrl: 'views/signin.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
        .state('/addQuestion', {
            url: '/addQuestion',                        
            templateUrl: 'views/addQuestion.html',
            controller: 'questionController',
            resolve: {
                editQuestion: function() {
                    return null;
                }
            }
        })
        .state('/allQuestions', {
            url: '/allQuestions',                                    
            templateUrl: 'views/all_questions.html',
            controller: 'AllQuestionsCtrl',
        })
        .state('/question_paper', {
            url: '/question_paper',                                    
            templateUrl: 'views/question_paper.html',
            controller: 'QuestionPaperCtrl',
            controllerAs: 'questionPaper'
        })
        .state('/register', {
            url: '/register',                                    
            templateUrl: 'views/register.html',
            controller: '',
            controllerAs: ''
        });
    });