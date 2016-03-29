angular.module('grumMod')
	.controller('landingController', ['$scope', '$http', function($scope, $http){
		
		$scope.loginUser = function(){
			$http.post('/loginAdmin', $scope.user)
				.then(function(returnData){
					if(returnData.data.error === "something went wrong"){
						alert("Not a valid email")
					}
					else {
						$http.get('/adminPage')
					}
				})
		}

		$scope.contactMe = function() {
			$scope.contact.date = new Date()
			$http.post('/submitMessage', $scope.contact)
				.then(function(returnData){
					if(returnData.data){
						$scope.contact = {}
					}
				})
			alert("Message has been sent. Thank you!")
			window.location.href="/"
		}

		
	}])