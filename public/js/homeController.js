angular.module('grumMod')
	.controller('grumController', ['$scope', '$http', 'breedFactory', function($scope, $http, breedFactory){
		$scope.breeds = breedFactory.breeds



		$scope.createUser = function(){
			$http.post('/createUser', $scope.newUser)
				.then(function(returnData){

					if(returnData.data.success) {
						if(returnData.data.type === "User") {window.location.href="/userPage"}
						else {window.location.href="/salonPage"}
					}
				})
		}

		$scope.loginUser = function(){
			console.log('function triggered')
			$http.post('/loginUser', $scope.user)
				.then(function(returnData){
					console.log(returnData.data)
					if(returnData.data.success) {
						if(returnData.data.type === "User"){window.location.href="/userPage"}
						else {window.location.href="/salonPage"}
					}
				})
		}

	
	}])