angular.module('grumMod')
	.controller('grumController', ['$scope', '$http', 'breedFactory', function($scope, $http, breedFactory){
		$scope.breeds = breedFactory.breeds
		$scope.weights = breedFactory.weights
		$scope.user = {}
		$scope.appointment = {}
		$http.get('/api/user')
			.then(function(returnData){
				if(returnData.data.user) {
					$scope.user = returnData.data.user					
				}
				$http.get('/api/getDogs/' + $scope.user._id)
						.then(function(returnData){
							$scope.dogs = returnData.data
						})
		})
		$http.get('/api/getSalons')
			.then(function(returnData){
				$scope.salons = returnData.data
			})

		

		$scope.showSchedule = function(){			
			$http.get('/api/getServices/' + $scope.appointment.salon._id)
				.then(function(returnData){
					$scope.services = returnData.data
					$scope.showSched = true
					$scope.checkAvail = true
				})
			$http.get('api/getGroomers/' + $scope.appointment.salon._id)
				.then(function(returnData){
					$scope.groomers = returnData.data
					
					
				})

		}

		var calculateTime = function(num) {
			return Math.ceil(num/30)
		}
		

		$scope.showAppointment = function(appointment, groomers) {
			$scope.appointmentConfirm = true
			$scope.checkAvail = false	
			$scope.appointment.time = calculateTime($scope.appointment.service.time[0][appointment.dog.weightClass])
			console.log($scope.groomers[0].schedule[5].schedule)
			for(var i = 0; i < $scope.groomers[0].schedule[0].schedule.length; i++) {
				for(var j = i; j < $scope.appointment.time; j++) {
					if(!$scope.groomers[0].schedule[0].schedule[j].available || $scope.groomers[0].schedule[j].schedule === "Off"){
							$scope.showbutton = false
						}					
				}
				$scope.showbutton = true	
			}
			
		}
		


	
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