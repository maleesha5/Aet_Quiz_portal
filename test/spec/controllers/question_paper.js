'use strict';

describe('Controller: QuestionPaperCtrl', function () {

  // load the controller's module
  beforeEach(module('aeturnumQuizProjectPortalApp'));

  var QuestionPaperCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuestionPaperCtrl = $controller('QuestionPaperCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(QuestionPaperCtrl.awesomeThings.length).toBe(3);
  });
});
