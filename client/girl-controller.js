myAngular.controller("GirlController", ["$scope", "$state", "$stateParams",
function($scope, $state, $stateParams){
  $scope.girl = {};
  $scope.index = -1;
  if ($stateParams.girl) {
    $scope.type = "Update";
    $scope.index = $stateParams.index;
    $scope.girl = $stateParams.girl;
  } else {
    $scope.type = "Add";
  }

  $scope.addOrUpdate = function() {
      $state.go("home", { girl: $scope.girl, index: $scope.index});
  }

  $scope.cancel = function() {
    $state.go("home");
  }
}]);
