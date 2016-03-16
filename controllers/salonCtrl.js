var Groomer = require('../models/groomerModel.js');
var Service = require('../models/serviceModel.js');
var Schedule = require('../models/scheduleModel.js');


function addGroomer(req, res) {
	var newGroomer = new Groomer({
		name : req.body.name,
		pic : req.body.pic,
		id : req.body.id,
		schedule : req.body.schedule
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

function getSchedules(req, res) {
	Schedule.find({id : req.params.ID}, function(err, docs){
		res.send(docs)
	})
}

function setSchedule(req, res) {
	var newSchedule = new Schedule({
		monday : req.body.monday,
		tuesday : req.body.tuesday,
		wednesday : req.body.wednesday,
		thursday : req.body.thursday,
		friday : req.body.friday,
		saturday : req.body.saturday,
		sunday : req.body.sunday,
		id : req.body.id
	})
	newSchedule.save(function(err, savedSchedule){
		res.send(savedSchedule)
	})

}

function updateGroomerSchedule(req, res) {
	Groomer.findOne({_id : req.body.id}, function(err, doc) {
		doc.schedule = req.body.schedule
		doc.save()
	})
}



module.exports = {
	addGroomer : addGroomer,
	getGroomers : getGroomers,
	addService : addService,
	getServices : getServices,
	setSchedule : setSchedule,
	getSchedules : getSchedules,
	updateGroomerSchedule : updateGroomerSchedule
}