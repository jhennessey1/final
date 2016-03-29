var User = require('../models/userModel.js')
var Dog = require('../models/dogModel.js')
var Appointment = require('../models/appointmentModel.js')
var bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Message = require('../models/contactModel.js')

passport.serializeUser(function(user, done){
	done(null, user.id);
});
passport.deserializeUser(function(id, done){
	User.findById(id, function(err, user){
		done(err, user)
	});
});


function loginUser(req, res, next){
	passport.authenticate('local', function(err, user, info){
		if(err) {return next(err)}
		if(!user) {return res.send({error: 'something went wrong'})}
		req.logIn(user, function(err){
			if(err) { return next(err)}

			return res.send({success: 'success', type : user.type})
		})
	})(req, res, next);
}

function createUser(req, res){
	bcrypt.genSalt(11, function(error, salt){
		bcrypt.hash(req.body.password, salt, function(hashError, hash){
			var newUser = new User({
				name : req.body.name,
				email : req.body.email,
				password : hash,
				phone : req.body.phone,
				type : req.body.type
			});
			newUser.save(function(saveErr, user){
				if(saveErr) {res.send({ err : saveErr }) }
				else {
					req.login(user, function(loginErr){
						if(loginErr) {res.send({ err : loginErr })}
						else { res.send({ success: 'success', type : user.type})}
					})
				}
			})
		})
	})
}


function createDog(req, res) {
	var newDog = new Dog({
		name : req.body.name,
		breed : req.body.breed.breed,
		weightClass : +req.body.weightClass,
		rabies : req.body.rabies,
		id : req.body.id
	});
	newDog.save(function(err, savedDog){
		res.send(savedDog)
	})
}

function getDogs(req, res) {
	Dog.find({id : req.params.ID}, function(err, docs){
		res.send(docs)
	})
}

function getSalons(req, res) {
	User.find({"type" : "Salon"}, function(err, docs){
		res.send(docs)
	})
}

function createAppointment(req, res) {
	var newAppointment = new Appointment({
		user : req.body.user,
		salon : req.body.salon,
		groomer : req.body.groomer,
		dog : req.body.dog,
		service : req.body.service,
		price : req.body.price,
		date : req.body.date,
		time : req.body.time,
		duration : req.body.duration,
		id : req.body.id,
		groomerId : req.body.groomerId
	})
	newAppointment.save(function(err, savedApp){
		res.send(savedApp)
	})
}

function getAppointments(req, res) {
	Appointment.find({id : req.params.ID}, function(err, docs){
		res.send(docs)
	})
}

function removeAppointment(req, res) {
	Appointment.remove({_id : req.body._id}, function(err, doc){
		res.send('Appointment Removed')
	})
}

function removeDog(req, res) {
	Dog.remove({ _id : req.body._id}, function(err, doc){
		res.send('Dog Gone')
	})
}

function getMessages(req, res) {
	Message.find({}, function(err, docs){
		res.send(docs)
	})
}

function submitMessage(req, res) {
	var newMessage = new Message({
		name : req.body.name,
		email : req.body.email,
		message : req.body.message,
		date : req.body.date
	})
	newMessage.save(function(err, savedMessage){
		res.send(savedMessage)
	})
}

function deleteMessage(req, res) {
	Message.remove({ _id : req.body._id}, function(err, docs){
		res.send(docs)
	})
}


module.exports = {
	createUser : createUser,
	loginUser : loginUser,
	createDog : createDog,
	getDogs : getDogs,
	getSalons : getSalons,
	createAppointment : createAppointment,
	getAppointments : getAppointments,
	removeAppointment : removeAppointment,
	removeDog : removeDog,
	getMessages : getMessages,
	submitMessage : submitMessage,
	deleteMessage : deleteMessage
}


