'use strict';

describe('Controller: HackersCtrl', function () {

  // load the controller's module
  beforeEach(module('ideaboardApp'));

  var HackersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HackersCtrl = $controller('HackersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
