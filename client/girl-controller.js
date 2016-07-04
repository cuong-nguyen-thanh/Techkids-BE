myAngular.controller("LXController", ["$scope", "$state", function($scope, $state){
  $scope.girl = {};

  $scope.add = function() {
    $state.go("home", { girl: $scope.girl });
  }

  $scope.cancel = function() {
    $state.go("home");
  }
}]);
