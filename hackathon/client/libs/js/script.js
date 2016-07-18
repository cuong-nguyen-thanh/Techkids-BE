$(document).ready(function(){
	$('body').on('click', '#dropdown-button', function(e){
		e.preventDefault();
		$('#dropdown-menu').toggleClass('active');
	});
});

var myAngular = angular.module("MyAngular", []);
myAngular.controller("MyController", ["$scope", "$http", function($scope, $http){
	$scope.articles = [];
	$http.get("/api/article").then(function(response){
		$scope.articles = response.data;
	})
}])
