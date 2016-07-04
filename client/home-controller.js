myAngular.controller("HomeController", ["$scope", "$state", "$stateParams",
function($scope, $state, $stateParams){
  $scope.girls = [
    {
      name: "Dzung",
      age: 21,
      facebook: "Dzung",
      password: "bananhtung"
    }, {
      name: "Ha",
      age: 22,
      facebook: "Ha San",
      password: "bananhtung1"
    }
  ];

  if ($stateParams.girl) {
    $scope.girls.push($stateParams.girl);
  }

  $scope.delete = function(index) {
    $scope.girls.splice(index, 1);
  }

  $scope.add = function() {
    $state.go("add-girl");
  }
}]);
