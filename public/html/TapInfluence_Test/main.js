angular.module('tapMod', []);

angular.module('tapMod')
	.controller('tapController', ['$scope', 'tapFactory', function($scope, tapFactory){
		$scope.data = tapFactory.data
		$scope.news = tapFactory.news
		$scope.events = tapFactory.events
		

		var translateData = function(data) {
			for(var x = 0; x < data.length; x++){
				data[x].name = translateKlingon(data[x].name)
				if(data[x].children.length > 0){
					data[x].more = true
					translateData(data[x].children)
				}
			}
			return data
		}

		function translateKlingon(string) {
			stringArr = string.split(" ")
			for(var i = 0; i < stringArr.length; i++){
				letArr = stringArr[i].split("")
				letArr[letArr.length] = letArr[0].toLowerCase()
				letArr.splice(0, 1)
				letArr.push("or")
				letArr[0] = letArr[0].toUpperCase()
				stringArr[i] = letArr.join("")
			}
			string = stringArr.join(" ")
			return string			
		}

		$scope.addArticle = function(newArt) {
			newArt.date = new Date()
			$scope.news.push(newArt)
			$scope.newArt = {}
		}

		$scope.addEvent = function(newEvent) {
			$scope.events.push(newEvent)
			$scope.newEvent = {}
		}

		$scope.showAnswer = false

		$scope.revealAnswer = function() {
			$scope.showAnswer = !$scope.showAnswer
		}

		$scope.showResults = function(answer) {
			$scope.preTest = false
			$scope.postTest = true
			if(answer) {
				if(answer.toLowerCase() !== "never"){
					alert("Wrong! It's Never! Never Ever High Five Your Commander! To the BRIG!")
					$scope.gameResult = "You lose. Close this window and re-open to try again."
				}
				else {
					alert("Well done.")
					$scope.gameResult = "Good guess."
				}
			} else {
				alert("No answer, huh? TO THE BRIG!")
				$scope.gameResult = "You lose. Close this window and re-open to try again."
			}	
			$scope.answer = ''

		}

		$scope.changeValues = function() {
			$scope.preTest = true
			$scope.postTest = false
		}
		
		
		translateData($scope.data)
		
		

	}])