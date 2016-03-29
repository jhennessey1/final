angular.module('grumMod')
	.controller('grumController', ['$scope', '$http', 'breedFactory', function($scope, $http, breedFactory){
		$scope.breeds = breedFactory.breeds
		$scope.weights = breedFactory.weights
		$scope.times = breedFactory.times
		$scope.days = breedFactory.days
		
		
		


		$http.get('/grumr/api/salon')
			.then(function(returnData){
				if(returnData.data.user) {
					$scope.salon = returnData.data.user
				}
				$http.get('/grumr/api/getGroomers/' + $scope.salon._id)
					.then(function(returnData){
						$scope.groomers = returnData.data
						
						
					})
				$http.get('/grumr/api/getServices/' + $scope.salon._id)
					.then(function(returnData){
						$scope.services = returnData.data
					})
				$http.get('/grumr/api/getSchedules/' + $scope.salon._id)
					.then(function(returnData){
						
					})
			})


		$scope.addGroomer = function() {
			$scope.newGroomer.id = $scope.salon._id
			$http.post('/grumr/addGroomer', $scope.newGroomer)
				.then(function(returnData){		
					$scope.groomers = $scope.groomers || []
					$scope.groomers.push(returnData.data)
					$scope.newGroomer = {}
				})
		}


		$scope.addService = function(){
			$scope.newService.id = $scope.salon._id
			$http.post('/grumr/addService', $scope.newService)
				.then(function(returnData){
					$scope.services = $scope.services || []
					$scope.services.push(returnData.data)
					$scope.newService = {}
				})
		}

		$scope.setSchedule = function() {
			$scope.schedule.monday = availability($scope.monStart, $scope.monEnd)
			$scope.schedule.tuesday = availability($scope.tueStart, $scope.tueEnd)
			$scope.schedule.wednesday = availability($scope.wedStart, $scope.wedEnd)
			$scope.schedule.thursday = availability($scope.thrStart, $scope.thrEnd)
			$scope.schedule.friday = availability($scope.friStart, $scope.friEnd)
			$scope.schedule.saturday = availability($scope.satStart, $scope.satEnd)
			$scope.schedule.sunday = availability($scope.sunStart, $scope.sunEnd)
			$http.post('/grumr/setSchedule', $scope.schedule)
				.then(function(returnData){
					$scope.groomerSchedule = {schedule : [{ day : "monday", schedule : returnData.data.monday }, { day : "tuesday", schedule : returnData.data.tuesday },  { day : "wednesday", schedule : returnData.data.wednesday }, { day : "thursday", schedule : returnData.data.thursday }, { day : "friday", schedule : returnData.data.friday }, { day : "saturday", schedule : returnData.data.saturday }, { day : "sunday", schedule : returnData.data.sunday}], id : returnData.data.id}
					$http.post('/grumr/updateGroomerSchedule', $scope.groomerSchedule)
						.then(function(returnData){
							$scope.schedule = {}
						})
				})
		}


		var availability = function(start, end) {
			var daySchedule = []
			if(start === "Off") {
				return "Off"
			}
			if(end === "Off") {
				return "Off"
			}
			for(var i = 0; i < $scope.times.length; i++) {
				if($scope.times[i].time === start){
					daySchedule.push($scope.times[i])
					for(var j = (i + 1); j < $scope.times.length; j++) {
						if($scope.times[j].time !== end){
							daySchedule.push($scope.times[j])
						}
						else {
							daySchedule.push($scope.times[j])
							return daySchedule
						}
					}					
				}


			}
		}

		$scope.getAppointments = function(groomer) {
			$http.get('/grumr/api/getGroomerAppointments/' + groomer._id)
				.then(function(returnData){
					if(returnData.data.length === 0){
						alert("You don't have any appointments! HA HA!")
					}
					$scope.appointments = returnData.data

				})
			$scope.seeAppointments = true
		}

		$scope.removeGroomer = function(groomer) {
			if(confirm('Remove Groomer?')){
				$http.post('/grumr/removeGroomer', groomer)
				for(var i = 0; i < $scope.groomers.length; i++) {
					if($scope.groomers[i]._id === groomer._id){
						$scope.groomers.splice(i, 1)
					}
				}
			}

		}

		$scope.removeService = function(service) {			
			if(confirm('Remove Service?')){
				$http.post('/grumr/removeService', service)
				for(var i = 0; i < $scope.services.length; i++) {
					if($scope.services[i]._id === service._id){
						$scope.services.splice(i, 1)
					}
				}
			}

		}
		

	}])

















