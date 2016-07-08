var myAngular = angular.module("myAngular", ["ui.router"]);

myAngular.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/home");

  $stateProvider.state('home', {
    url: "/home",
    templateUrl: "templates/home.html",
    controller: "HomeController",
    params: {girl: null, index: -1}
  });

  $stateProvider.state('add-girl', {
    url: "/add-girl",
    templateUrl: "templates/add-girl.html",
    controller: "GirlController"
  });

  $stateProvider.state('update-girl', {
    url: "/update-girl",
    templateUrl: "templates/add-girl.html",
    controller: "GirlController",
    params: {girl: null, index: -1}
  });

  $stateProvider.state('about-us', {
    url: "/about-us",
    templateUrl: "templates/about-us.html"
  });

});

myAngular.directive("lx", [function(){
  return {
    restrict: "E",
    scope: {
      page: "=",
      size: "="
    },
    templateUrl: "templates/lx.html",
    controller: "LXController"
  }
}]);
