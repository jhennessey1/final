angular.module('grumMod')
	.controller('grumController', ['$scope', '$http', 'breedFactory', function($scope, $http, breedFactory){
		$scope.breeds = breedFactory.breeds
		$scope.weights = breedFactory.weights
		$scope.salon = {}

		$http.get('/api/salon')
			.then(function(returnData){
				if(returnData.data.user) {
					$scope.salon = returnData.data.user
				}
			})


	}])