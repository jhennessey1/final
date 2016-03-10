angular.module('grumMod')
	.controller('grumController', ['$scope', '$http', 'breedFactory', function($scope, $http, breedFactory){
		$scope.breeds = breedFactory.breeds

		$scope.createUser = function(){
			$http.post('/createUser', $scope.newUser)
				.then(function(returnData){

					if(returnData.data.success) {window.location.href="/userPage"}
				})
		}

		$scope.loginUser = function(){
			console.log('function triggered')
			$http.post('/loginUser', $scope.user)
				.then(function(returnData){
					console.log(returnData.data)
					if(returnData.data.success) {window.location.href="/userPage"}
				})
		}

		$scope.createSalon = function() {
			$http.post('/createSalon', $scope.newSalon)
				.then(function(returnData){
					if(returnData.data.success) {window.location.href="/salonPage"}
				})
		}

		$scope.loginSalon = function(){
			$http.post('/loginSalon', $scope.salon)
				.then(function(returnData){
					console.log(returnData.data)
					if(returnData.data.success) {window.location.href="/salonPage"}
				})
		}

	}])