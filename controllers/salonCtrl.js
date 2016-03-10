var Salon = require('../models/storeModel.js')
var bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done){
	done(null, user.id);
});
passport.deserializeUser(function(id, done){
	Salon.findById(id, function(err, user){
		done(err, user)
	});
});

// passport.use(new LocalStrategy({
// 	usernameField : 'username',
// 	passwordField : 'password',
// 	passReqToCallback : true
// 	},
// 	function(req, username, password, done){
// 		Salon.findOne({ username : username}, function (err, user) {
// 			if(err) {return done(err);}
// 			if(!user) {
// 				return done(null, false, {message : 'Incorrect Username'});
// 			}
			

// 			bcrypt.compare(password, user.password, function (error, response) {
// 				if(response === true) {
// 					return done(null, user)
// 				}
// 				else {
// 					return done(null, false)
// 				}
// 			})
// 		})
// 	}))


function loginSalon(req, res, next){
	passport.authenticate('salon', function(err, user, info){
		if(err) {return next(err)}
		if(!user) {return res.send({error: 'something went wrong'})}
		req.logIn(user, function(err){
			if(err) { return next(err)}
			return res.send({success: 'success'})
		})
	})(req, res, next);
}

function createSalon(req, res){
	bcrypt.genSalt(11, function(error, salt){
		bcrypt.hash(req.body.password, salt, function(hashError, hash){
			var newSalon = new Salon({
				username : req.body.username,
				password : hash,
			});
			newSalon.save(function(saveErr, user){
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


module.exports = {
	createSalon : createSalon,
	loginSalon : loginSalon
}

