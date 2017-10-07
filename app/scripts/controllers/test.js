'use strict';

/**
 * @ngdoc function
 * @name aeturnumQuizProjectPortalApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the aeturnumQuizProjectPortalApp
 */
angular.module('aeturnumQuizProjectPortalApp')
    .controller('TestCtrl', function ($uibModal, $log, $document) {
        const $ctrl = this;
        $ctrl.items = ['item1', 'item2', 'item3'];

        $ctrl.animationsEnabled = true;

        $ctrl.open = function (size, parentSelector) {
            const parentElem = parentSelector ?
                angular.element($document[0].querySelector(`.modal-demo ${parentSelector}`)) : undefined;
            const modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/addQuestion.html',
                controller: 'questionController',
                size,
                appendTo: parentElem,
                resolve: {
                    items() {
                        return $ctrl.items;
                    }
                }
            });
        };


        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
