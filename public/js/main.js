angular.module('damnMod', []);

angular.module('damnMod')
	.controller('damnController', ['$scope', '$http', 'damnRules', function($scope, $http, damnRules){
		$scope.rules = damnRules.rules
		$scope.beforeGame = true

		$scope.addPlayer = function(player){
			if(player.password === player.passwordConfirm){
			
				$http.post('createPlayer', player)
					.then(function(returnData){
						$scope.player = returnData.data
						$scope.players.push($scope.player)
						$scope.player = {}
					})
			}
			else {
				alert("Passwords don't match")
			}
		}

		$scope.addOpponent = function(player) {
			$scope.activePlayers = $scope.activePlayers || []
			for(var i = 0; i < $scope.activePlayers.length; i++){
				if($scope.activePlayers[i] === player){
					alert(player.name + ' is already playing!')
					return
				}
			}
			$scope.activePlayers.push(player)
			if($scope.activePlayers.length > 2){
				$scope.startOk = true
			}
		}
		$scope.round = 1
		// $scope.levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
		$scope.startGame = function(activePlayers) {
			$scope.beforeGame = false
			$scope.duringGame = true
			$scope.players = activePlayers
			for(var i = 0; i < $scope.players.length; i++){
				$scope.players[i].score = 0
				$scope.players[i].rule = 1
				$scope.players[i].btnShow = true
			}
		}

		$scope.complete = function(player) {
			player.complete = !player.complete
			player.congrats = !player.congrats
			player.btnShow = !player.btnShow
		}

		$scope.endRound = function(players) {
			for(var x = 0; x < players.length; x++){
				if(players[x].points === undefined){
					alert("Enter Points for " + players[x].name)
					return
				}
			}
			for(var i = 0; i < players.length; i++){				
				if(players[i].complete === true){
					players[i].rule++
					if(players[i].rule > 12){
						$scope.winner = players[i]
						$scope.duringGame = false
						$scope.afterGame = true
						
					}
				}
				players[i].complete = false
				players[i].btnShow = true
				players[i].congrats = false
				players[i].score += players[i].points
				players[i].points = undefined
			}
			$scope.round++
		}



		$http.get('/api/getPlayers')
			.then(function(returnData){
				$scope.players = returnData.data
			})

	}])