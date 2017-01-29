describe('App', function() {

  var $rootScope, scope, createController, $q, deferred, $location;

  var CreateCakeService = {
    createCake: function() {

    deferred = $q.defer();

      return {
        $promise: deferred.promise
      };
    }
  };

  beforeEach(function() {

    angular.mock.module('app');

    inject(function(_$rootScope_, $controller, _$q_, _$location_) {

      $rootScope = _$rootScope_;
      scope = $rootScope.$new();
      $location = _$location_;

      createController = function() {
        $controller('CreateController', {
          $scope: scope,
          CreateCakeService: CreateCakeService,
        });
      };

      $q = _$q_;

    });

    spyOn(CreateCakeService, 'createCake').and.callThrough();
    spyOn($location, 'path').and.callThrough();

  });


  it('CreateController initialized,  CreateCakeService called then redirected to the list route', function() {

    createController();
    scope.createCake();

    expect(CreateCakeService.createCake).toHaveBeenCalled();

    deferred.resolve();
    $rootScope.$digest();

    expect($location.path).toHaveBeenCalledWith('/list');

  });

});