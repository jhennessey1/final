var User = require('../models/userModel.js')
var Dog = require('../models/dogModel.js')
var bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done){
	done(null, user.id);
});
passport.deserializeUser(function(id, done){
	User.findById(id, function(err, user){
		done(err, user)
	});
});


function loginUser(req, res, next){
	passport.authenticate('user', function(err, user, info){
		if(err) {return next(err)}
		if(!user) {return res.send({error: 'something went wrong'})}
		req.logIn(user, function(err){
			if(err) { return next(err)}
			return res.send({success: 'success'})
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
				phone : req.body.phone
			});
			newUser.save(function(saveErr, user){
				if(saveErr) {res.send({ err : saveErr }) }
				else {
					req.login(user, function(loginErr){
						if(loginErr) {res.send({ err : loginErr })}
						else { res.send({ success: 'success'})}
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



module.exports = {
	createUser : createUser,
	loginUser : loginUser,
	createDog : createDog,
	getDogs : getDogs
}


