angular.module('grumMod')
	.controller('grumController', ['$scope', '$http', 'breedFactory', function($scope, $http, breedFactory){
		$scope.breeds = breedFactory.breeds



		$scope.createUser = function(){
			$http.post('/grumr/createUser', $scope.newUser)
				.then(function(returnData){

					if(returnData.data.success) {
						if(returnData.data.type === "User") {window.location.href="/grumr/userPage"}
						else {window.location.href="/grumr/salonPage"}
					}
				})
		}

		$scope.loginUser = function(){
			console.log('function triggered')
			$http.post('/grumr/loginUser', $scope.user)
				.then(function(returnData){
					if(returnData.data.error === "something went wrong"){
						alert("Not a valid email")
					}
					console.log(returnData.data)
					if(returnData.data.success) {
						if(returnData.data.type === "User"){window.location.href="/grumr/userPage"}
						else {window.location.href="/grumr/salonPage"}
					}
				})
		}

	
	}])