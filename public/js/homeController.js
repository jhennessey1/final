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
			console.log('Function triggered: Step 1')
			$http.post('/loginUser', $scope.user)
				.then(function(returnData){
					console.log('Return Data received: Step 4')
					console.log(returnData.data)
					if(returnData.data.success) {window.location.href="/userPage"}
				})
		}

	}])