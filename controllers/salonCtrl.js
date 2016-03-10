var Groomer = require('../models/groomerModel.js');
var Service = require('../models/serviceModel.js');


function addGroomer(req, res) {
	var newGroomer = new Groomer({
		name : req.body.name,
		pic : req.body.pic,
		id : req.body.id
	});
	newGroomer.save(function(err, savedGroomer){
		res.send(savedGroomer)
	})
}

function addService(req, res) {
	var newService = new Service({
		name : req.body.name,
		price : req.body.price,
		time : req.body.time,
		id : req.body.id
	})
	newService.save(function(err, savedService){
		res.send(savedService)
	})
}


function getGroomers(req, res) {
	Groomer.find({id : req.params.ID}, function(err, docs){
		res.send(docs)
	})
}

function getServices(req, res) {
	Service.find({id : req.params.ID}, function(err, docs){
		res.send(docs)
	})
}



module.exports = {
	addGroomer : addGroomer,
	getGroomers : getGroomers,
	addService : addService,
	getServices : getServices
}