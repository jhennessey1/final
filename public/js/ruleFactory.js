angular.module("damnMod").
	factory("damnRules", [function(){
		
		var rules = {
			1 : "2 sets of 3",
			2 : "1 set of 3 and 1 run of 4",
			3 : "2 sets of 4",
			4 : "2 runs of 4",
			5 : "3 sets of 3",
			6 : "2 sets of 3 and 1 run of 4",
			7 : "1 set of 3 and 1 run of 7",
			8 : "1 set of 3 and 2 runs of 4",
			9 : "2 sets of 5",
			10 : "2 runs of 5",
			11 : "1 set of 8",
			12 : "1 run of 12"
		}
		


		return {
			rules : rules
		}
	}])