angular.module('grumMod')
	.controller('grumController', ['$scope', '$http', 'breedFactory', function($scope, $http, breedFactory){
		$http.get('/api/user')
			.then(function(returnData){
				if(returnData.data.user) {
					$scope.user = returnData.data.user
				}
			})
	}])