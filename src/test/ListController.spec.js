describe('App', function() {

  var $rootScope, scope, createController, $q, deferred, modal;

  var CakesService = {
    getCakes: function() {

      deferred = $q.defer();

      return {
        $promise: deferred.promise
      };
    },

    removeCake: function() {

      deferred = $q.defer();

      return {
        $promise: deferred.promise
      };
    }
  };

  beforeEach(function() {

    angular.mock.module('app');

    inject(function(_$rootScope_, $controller, _$q_, $injector) {

      $rootScope = _$rootScope_;
      scope = $rootScope.$new();
      modal = $injector.get('$uibModal');

      createController = function() {
        $controller('ListController', {
          $scope: scope,
          CakesService: CakesService,
          modal: modal
        });
      };

      $q = _$q_;
    });

    spyOn(CakesService, 'getCakes').and.callThrough();

  });

  // describe('Controller', function() {

  it('GetCakeService should not have been called / API response success false', function() {

    expect(CakesService.getCakes).not.toHaveBeenCalled();
    expect(scope.getCakesSuccess).toBeFalsy();

  });

  it('Listcontroller has been initialized,  GetCakeService called / API response success true', function() {

    createController();
    expect(CakesService.getCakes).toHaveBeenCalled();

    deferred.resolve();
    $rootScope.$digest();

    expect(scope.getCakesSuccess).toBeTruthy();

  });

  it('Modal should open when getCake method has been called', function() {
    createController();
    var modalSpy = spyOn(modal, 'open');
    scope.getCake();
    expect(modalSpy).toHaveBeenCalled();

  });

});