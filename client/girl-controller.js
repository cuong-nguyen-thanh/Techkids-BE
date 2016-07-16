myAngular.controller("GirlController", ["$scope", "$state", "$stateParams", "$http",
function($scope, $state, $stateParams, $http){
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
      $http.post("/api/hot-girl", {girl: $scope.girl}).then(function(response){
        console.log("add sucessfully!");
        $state.go("home");
      })
  }

  $scope.cancel = function() {
    $state.go("home");
  }

  // $http.put("/api/hot-girl", {girl: {name:"test"}}).then(function(response){
  //   console.log("put sucessfully!");
  // })

  $http.delete("/api/hot-girl?id=1").then(function(response){
    console.log("put sucessfully!");
  })
}]);
