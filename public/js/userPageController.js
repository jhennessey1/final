angular.module('grumMod')
	.controller('grumController', ['$scope', '$http', 'breedFactory', function($scope, $http, breedFactory){
		$scope.breeds = breedFactory.breeds
		$scope.weights = breedFactory.weights
		$scope.user = {}
		$http.get('/api/user')
			.then(function(returnData){
				if(returnData.data.user) {
					$scope.user = returnData.data.user
					$http.get('/api/getDogs/' + $scope.user._id)
						.then(function(returnData){
							$scope.dogs = returnData.data
						})
				}
		})

		


	
		$scope.createDog = function() {
			
			$scope.newDog.id = $scope.user._id
			$http.post('/createDog', $scope.newDog)
				.then(function(returnData){
					console.log('Dog Added')
					$scope.dogs = $scope.dogs || []
					$scope.dogs.push(returnData.data)
					$scope.newDog = {}
					
				})
		}

		



		

	}])