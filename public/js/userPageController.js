angular.module('grumMod')
	.controller('grumController', ['$scope', '$http', 'breedFactory', function($scope, $http, breedFactory){
		$scope.breeds = breedFactory.breeds
		$scope.weights = breedFactory.weights
		$scope.user = {}
		$scope.appointment = {}
		$http.get('/grumr/api/user')
			.then(function(returnData){
				if(returnData.data.user) {
					$scope.user = returnData.data.user					
				}
				$http.get('/grumr/api/getDogs/' + $scope.user._id)
						.then(function(returnData){
							$scope.dogs = returnData.data
						})
				$http.get('/grumr/api/getAppointments/' + $scope.user._id)
					.then(function(returnData){
						$scope.nextAppointments = returnData.data
						// console.log(new Date($scope.nextAppointments[0].date))
						if($scope.nextAppointments.length > 0) {
							$scope.upcoming = true
						}
					})
		})
		$http.get('/grumr/api/getSalons')
			.then(function(returnData){
				$scope.salons = returnData.data
			})

		

		$scope.showSchedule = function(){			
			$http.get('/grumr/api/getServices/' + $scope.appointment.salon._id)
				.then(function(returnData){
					$scope.services = returnData.data
					$scope.showSched = true
					$scope.checkAvail = true
				})
			$http.get('/grumr/api/getGroomers/' + $scope.appointment.salon._id)
				.then(function(returnData){
					$scope.groomers = returnData.data




					
				})


			// for(var i = 0; i < $scope.groomers.length; i++){
			// 	for(var j = 0; j < $scope.groomers[i].dates.length; j++) {
			// 		if($scope.appointment.sched.$$hashKey === $scope.groomers[i].dates[j].groomerSched[0].$$hashKey){
						
			// 			for(var n = $scope.appointment.index; n < ($scope.appointment.index + $scope.appointment.duration); n++){
			// 				$scope.groomers[i].dates[j].groomerSched[0][n].available = false
			// 			}
			// 		}
			// 	}
			// }



		}

		

		var calculateTime = function(num) {
			return Math.ceil(num/30)
		}
		

		$scope.showAppointment = function(appointment, groomers) {
			$scope.appointmentConfirm = true
			$scope.checkAvail = false	
			$scope.appointment.duration = calculateTime($scope.appointment.serviceObj.time[0][appointment.dog.weightClass])
			$scope.addDates()
			

		}
		


	
		$scope.createDog = function() {
			
			$scope.newDog.id = $scope.user._id
			$http.post('/grumr/createDog', $scope.newDog)
				.then(function(returnData){
					console.log('Dog Added')
					$scope.dogs = $scope.dogs || []
					$scope.dogs.push(returnData.data)
					$scope.newDog = {}
					
				})
		}
		var x = 8
		var y = 1
		$scope.addDates = function() {
			
			for(var v = 0; v < $scope.groomers.length; v++){
				
				$scope.groomers[v].dates = []

			
				var today = new Date()
				
				var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']	

				for(var i = y; i < x; i++) {
					$scope.newDate = {
						date: new Date(new Date().setDate(today.getDate() + i)),
						groomerSched : []
						
					}

					$scope.newDate.day = days[($scope.newDate.date).getDay()]
					
				
						for(var j = 0; j < $scope.groomers[v].schedule.length; j++){
							if($scope.groomers[v].schedule[j].day === $scope.newDate.day){
								$scope.newDate.groomerSched.push($scope.groomers[v].schedule[j].schedule)
								for(var g = 0; g < $scope.nextAppointments.length; g++){
									// console.log($scope.nextAppointments[g].date)
									if($scope.nextAppointments[g].date === $scope.newDate.date){
										console.log($scope.newDate.date)
										
									}
								}
								// console.log($scope.newDate)
								$scope.groomers[v].dates.push($scope.newDate)
								$scope.newDate = {}						
							}
							
						}

					
					
				}

			}
						
			// console.log($scope.groomers)
			// console.log($scope.nextAppointments[0])
			for(var p = 0; p < $scope.groomers.length; p++){
				for(var m = 0; m < $scope.nextAppointments.length; m++){
					if($scope.groomers[p]._id === $scope.nextAppointments[m].groomerId){
						for(var k = 0; k < $scope.groomers[p].dates.length; k++){
							// console.log($scope.groomers[p].dates[k].date, $scope.nextAppointments[m].date)
							if($scope.groomers[p].dates[k].date === $scope.nextAppointments[m].date){
								// console.log('Match Again!')
								// console.log($scope.groomers[p].dates[k].date, $scope.nextAppointments[m].date)
							}
						}
					}
				}
			}
		}

		$scope.nextWeek = function() {
			y += 7
			x += 7
			$scope.showPrevious = true
			$scope.addDates()
		}

		$scope.lastWeek = function() {
			if(y > 7){
				y -= 7
				x -= 7
			}
			if(y > 7) {
				$scope.showPrevious = true
			}
			else {
				$scope.showPrevious = false
			}
			
			
			$scope.addDates()
		} 

		$scope.myColor = function(available) {
			if(available){
				return "btn btn-success"
			}
			else{
				return "btn btn-danger disabled"
			}
		}

		$scope.selectDateTime = function(date, time, groomer, user, index) {
			// console.log(groomer)
			// console.log(groomer.dates)
			// console.log(groomer.dates[0])
			// console.log(date)
			$scope.date = date

			
			if(time.available){
				$scope.time = time
				$scope.appointment.sched = date.groomerSched[0]
				$scope.appointment.id = user._id
				$scope.appointment.user = user
				$scope.appointment.date = date.date
				$scope.appointment.time = time.time
				$scope.appointment.groomer = groomer.name
				$scope.appointment.groomerId = groomer._id
				$scope.appointment.price = $scope.appointment.serviceObj.price[0][$scope.appointment.dog.weightClass]
				$scope.appointment.service = $scope.appointment.serviceObj.name
				$scope.appointment.index = index
			}
			else {
				alert("That time is not available for this groomer.")
			}
			
			

		}

		

		

		$scope.scheduleAppointment = function() {
			console.log($scope.appointment.date)
			for(var i = 0; i < $scope.groomers.length; i++){
				for(var j = 0; j < $scope.groomers[i].dates.length; j++) {
					if($scope.appointment.date === $scope.groomers[i].dates[j].date){
						
						for(var n = $scope.appointment.index; n < ($scope.appointment.index + $scope.appointment.duration); n++){
							$scope.groomers[i].dates[j].groomerSched[0][n].available = false
						}
					}
				}
			}
			console.log()
			

			
			$http.post('/grumr/createAppointment', $scope.appointment)
					.then(function(returnData){
						$scope.appointment = returnData.data
						console.log($scope.appointment.date)
						$scope.nextAppointments = $scope.nextAppointments || []
						$scope.nextAppointments.push($scope.appointment)
						$scope.appointment = {}
					})
			
			if($scope.nextAppointments.length > 0) {
				$scope.upcoming = true
			}

			
		}

		$scope.removeAppointment = function(appointment) {
			if(confirm('Remove Appointment?')){
				$http.post('/grumr/removeAppointment', appointment)
				for(var i = 0; i < $scope.nextAppointments.length; i++){
					if($scope.nextAppointments[i]._id === appointment._id){
						$scope.nextAppointments.splice(i, 1)
					}
				}	
			}
		}

		$scope.removeDog = function(dog) {
			if(confirm('Remove this Dog?')){
				if(confirm('Did he die?')){
					alert('Sorry for your loss.')
				}
				$http.post('/grumr/removeDog', dog)
				for(var i = 0; i < $scope.dogs.length; i++){
					if($scope.dogs[i]._id === dog._id){
						$scope.dogs.splice(i, 1)
					}
				}
			}
		}

		



	}])











