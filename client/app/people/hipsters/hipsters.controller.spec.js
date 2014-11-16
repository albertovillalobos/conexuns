'use strict';

describe('Controller: HipstersCtrl', function () {

  // load the controller's module
  beforeEach(module('ideaboardApp'));

  var HipstersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HipstersCtrl = $controller('HipstersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
