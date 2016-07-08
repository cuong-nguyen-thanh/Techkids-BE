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
    },
    {
      name: "Ha",
      age: 22,
      facebook: "Ha San",
      password: "bananhtung1"
    },
    {
      name: "XXX",
      age: 22,
      facebook: "XXX",
      password: "XXX"
    },
    {
      name: "YYY",
      age: 22,
      facebook: "YYY",
      password: "YYY"
    },
    {
      name: "XXX",
      age: 22,
      facebook: "XXX",
      password: "XXX"
    },
    {
      name: "YYY",
      age: 22,
      facebook: "YYY",
      password: "YYY"
    }
  ];

  if ($stateParams.girl) {
    if ($stateParams.index != -1) {
      $scope.girls[$stateParams.index] = $stateParams.girl;
    } else {
      $scope.girls.push($stateParams.girl);
    }
  }
}]);
