angular.module('grumMod')
	.controller('grumController', ['$scope', '$http', 'breedFactory', function($scope, $http, breedFactory){
		$scope.breeds = breedFactory.breeds
		$scope.weights = breedFactory.weights
		$scope.salon = {}

		$http.get('/api/salon')
			.then(function(returnData){
				if(returnData.data.user) {
					$scope.salon = returnData.data.user
					$http.get('/api/getGroomers/' + $scope.salon._id)
						.then(function(returnData){
							$scope.groomers = returnData.data
						})
					$http.get('api/getServices/' + $scope.salon._id)
						.then(function(returnData){
							$scope.services = returnData.data
						})
				}
			})

		$scope.addGroomer = function() {
			$scope.newGroomer.id = $scope.salon._id
			$http.post('/addGroomer', $scope.newGroomer)
				.then(function(returnData){		
					$scope.groomers = $scope.groomers || []
					$scope.groomers.push(returnData.data)
					$scope.newGroomer = {}
				})
		}


		$scope.addService = function(){
			$scope.newService.id = $scope.salon._id
			$http.post('/addService', $scope.newService)
				.then(function(returnData){
					$scope.services = $scope.services || []
					$scope.services.push(returnData.data)
					$scope.newService = {}
				})
		}

	}])