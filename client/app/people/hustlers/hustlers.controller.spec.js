'use strict';

describe('Controller: HustlersCtrl', function () {

  // load the controller's module
  beforeEach(module('ideaboardApp'));

  var HustlersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HustlersCtrl = $controller('HustlersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
