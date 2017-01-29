export default class CreateController {
  constructor ($scope, CreateCakeService, $location) {

    $scope.createCake = (cake) => {

      CreateCakeService.createCake(cake).$promise.then(
          function (response) {
            $location.path('/list');
          },
          function (error) {
          });
    }
  }
}
