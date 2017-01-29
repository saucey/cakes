import detailTemplate from 'detail/detail.html';
import removeTemplate from 'remove/remove.html';

export default class ListController {
  constructor($scope, CakesService, $uibModal) {

    $scope.getCakesSuccess = false;
    $scope.removeCakeSuccess = false;

    CakesService.getCakes().$promise.then(
        function(response) {
          $scope.cakeList = response;
          $scope.getCakesSuccess = true;
        },
        function(error) {
          $scope.getCakesSuccess = false;
        });

    $scope.removeCake = function(id, index) {

      $uibModal.open({
        templateUrl: removeTemplate,
        size: 'md',
        controller: function($uibModalInstance) {
          $scope.remove = function() {

            CakesService.removeCake({id: id}).$promise.then(
                function(response) {
                  console.log(response, 'delete success');
                  $scope.cakeList.splice(index, 1);
                  $uibModalInstance.close(true);
                  $scope.removeCakeSuccess = true;
                },
                function(error) {
                  console.log(error, 'delete error');
                  $scope.removeCakeSuccess = false;
                });

          },
              $scope.cancel = function() {
                $uibModalInstance.close(false);
              }
        },
        scope: $scope,
        backdrop: 'static',
        keyboard: false
      });
    };

    $scope.getCake = function(cake) {
      $scope.cake = cake;

      $uibModal.open({
        templateUrl: detailTemplate,
        size: 'md',
        controller: function($uibModalInstance) {
          $scope.close = function() {
            $uibModalInstance.close();
          }
        },
        scope: $scope,
        backdrop: 'static',
        keyboard: false
      });
    };
  }
}
