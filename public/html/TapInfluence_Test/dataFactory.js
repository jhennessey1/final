angular.module('tapMod')
	.factory('tapFactory', function(){
		var data = [
			{"name":"About The Crew","children":[
				{"name":"Captain","children":[]},
				{"name":"Hyperspace FAQS","children":[]},
				{"name":"First Season","children":[]}]},
			{"name":"Second Season","children":[
				{"name":"Plot","children":[]},
				{"name":"Cast","children":[]}]},
			{"name":"The Spacecraft","children":[
				{"name":"Engine","children":[
					{"name":"Plasma Drive","children":[]},
					{"name":"Warp Drive","children":[]}]},
				{"name":"Bridge","children":[]},
				{"name":"Cabins","children":[]}]}]


		var news = [{title : "Cable TV Blackouts in the Twelve Colonies", date : "1410847200000", url : "#"}, {title : "Earth Appears Not to be Where it Was Before", date : "1410847200000", url : "#"}, {title : "Cloud 9 Closed for Renovation", date : "1410847200000", url : "#"}]

		var events = [{title : "Caprican Bake Sale", date : "Tuesday, September 16, 2014"}, {title : "Annual Sixes and Eights Mixer", date : "Tuesday, September 16, 2014"}, {title : "2015 Raptor Maintenance and Repair Conference", date : "Tuesday, September 16, 2014"}]


		return {
			data : data,
			news : news,
			events : events
		}
	})