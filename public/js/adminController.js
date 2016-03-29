angular.module('grumMod')
	.controller('adminController', ['$scope', '$http', function($scope, $http){

		$http.get('/api/getMessages')
			.then(function(returnData){
				$scope.messages = returnData.data
			})


		$scope.deleteMessage = function(message) {
			if(confirm('Delete?')){
				$http.post('/deleteMessage', message)
				for(var i = 0; i < $scope.messages.length; i++){
						if($scope.messages[i]._id === message._id){
							$scope.messages.splice(i, 1)
						}
					}
			}

		}

	}])