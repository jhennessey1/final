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
				$http.get('/api/getAppointments/' + $scope.user._id)
					.then(function(returnData){
						$scope.nextAppointments = returnData.data
						console.log($scope.nextAppointments)
						if($scope.nextAppointments.length > 0) {
							$scope.upcoming = true
						}
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
					// $scope.schedules = []
					// console.log($scope.groomers[0].schedule[0])
					// for(var i = 0; i < $scope.groomers.length; i++){
					// 	for(var j = 0; j < $scope.groomers[i].schedule.length; j++){

					// 	}	
					// }

				})


		}

		

		var calculateTime = function(num) {
			return Math.ceil(num/30)
		}
		

		$scope.showAppointment = function(appointment, groomers) {
			$scope.appointmentConfirm = true
			$scope.checkAvail = false	
			$scope.appointment.duration = calculateTime($scope.appointment.service.time[0][appointment.dog.weightClass])
			for(var i = 0; i < $scope.groomers.length; i++){
				$scope.addDates(i)
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
						schedule: [],
						groomerSched : []
						
					}
					$scope.newDate.day = days[($scope.newDate.date.getDay())]
				
						for(var j = 0; j < $scope.groomers[v].schedule.length; j++){
							if($scope.groomers[v].schedule[j].day === $scope.newDate.day){
								$scope.newDate.groomerSched.push($scope.groomers[v].schedule[j].schedule)
								$scope.groomers[v].dates.push($scope.newDate)
								$scope.newDate = {}						
							}
							
						}

					// console.log($scope.newDate.date.getDay())
					// $scope.dates.push($scope.newDate)
					// $scope.newDate = {}
					
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
				return "btn btn-danger"
			}
		}

		$scope.selectDateTime = function(date, time, groomer, user) {
			if(time.available){
				$scope.appointment.id = user._id
				console.log($scope.appointment.id, user._id)
				$scope.appointment.user = user
				$scope.appointment.date = date.date
				$scope.appointment.time = time.time
				$scope.appointment.groomer = groomer.name
				$scope.appointment.price = $scope.appointment.service.price[0][$scope.appointment.dog.weightClass]
				$scope.appointment.service = $scope.appointment.service.name
			}
			else {
				alert("That time is not available for this groomer.")
			}
			console.log($scope.appointment)

		}

		$scope.scheduleAppointment = function() {
			$http.post('/createAppointment', $scope.appointment)
					.then(function(returnData){
						$scope.appointment = returnData.data
						$scope.nextAppointments = $scope.nextAppointments || []
						$scope.nextAppointments.push($scope.appointment)
					})
			
		}



	}])











