var User = require('../models/userModel.js')
var bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


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
passport.serializeUser(function(user, done){
	done(null, user.id);
});
passport.deserializeUser(function(id, done){
	User.findById(id, function(err, user){
		done(err, user)
	});
});

// var bcrypt = require('bcryptjs')
// passport.use(new LocalStrategy(
// 	function(username, password, done){
// 		User.findOne({username: username}, function(err, user) {
// 			if(err) {return done(err)}
// 			if(!user) {
// 				return done(null, false);
// 			}

// 			bcrypt.compare(password, user.password, function(error, response) {
// 				if(response === true) {
// 					return done(null, user)
// 				}
// 				else {
// 					return done(null, false)
// 				}
// 			})
// 		})
// 	}))

// function loginUser(req, res, next) {
// 	console.log('Authenticating: Step 3')
// 	passport.authenticate('local', function(err, user, info){
// 		console.log('Step: 4')
// 		if(err) {return next(err)}
// 		if(!user) {return res.send({error: 'something went wrong'})}
// 		req.logIn(user, function(err){
// 			if(err) { return next(err)}
// 			return res.send({success: 'success'})
// 		})
// 	})(req, res, next);
// }



module.exports = {
	createUser : createUser,
	// loginUser : loginUser
}


