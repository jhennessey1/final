var Player = require('../models/playerModel.js');


function createPlayer(req, res) {
	var newPlayer = new Player({
		name : req.body.name,
		password : req.body.password,
		pic : req.body.pic
	})
	newPlayer.save(function(err, savedPlayer){
		res.send(savedPlayer)
	})
}

function getPlayers(req, res) {
	Player.find({}, function(err, docs){
		res.send(docs)
	})
}



module.exports = {
	createPlayer : createPlayer,
	getPlayers : getPlayers
}