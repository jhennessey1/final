var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

/** Express Session Setup **/
var session = require('express-session')
app.sessionMiddleware = session({
  secret: 'america boi',
  resave: false,
  saveUninitialized: true,
})
app.use(app.sessionMiddleware)

/** End Express Session Setup **/

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/final');

var userCtrl = require('./controllers/userCtrl.js')
var salonCtrl = require('./controllers/salonCtrl.js')
var User = require('./models/userModel.js')
var Dog = require('./models/dogModel.js')
var Salon = require('./models/storeModel.js')

var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done){
	done(null, user.id);
});

passport.deserializeUser(function(id, done){
	User.findById(id, function(err, user){
		done(err, user)
	});
});

passport.deserializeUser(function(id, done){
	Salon.findById(id, function(err, user){
		done(err, user)
	});
});



var bcrypt = require('bcryptjs')

passport.use('user', new LocalStrategy({
	usernameField : 'email',
	passwordField : 'password',
	passReqToCallback : true
},
	function(req, email, password, done){
		User.findOne({ email : email}, function (err, user) {
			if(err) {return done(err);}
			if(!user) {
				return done(null, false, {message : 'Incorrect Username'});
			}
			

			bcrypt.compare(password, user.password, function (error, response) {
				if(response === true) {
					return done(null, user)
				}
				else {
					return done(null, false)
				}
			})
		})
	}))
	

passport.use('salon', new LocalStrategy({
	usernameField : 'username',
	passwordField : 'password',
	passReqToCallback : true
	},
	function(req, username, password, done){
		Salon.findOne({ username : username}, function (err, user) {
			if(err) {return done(err);}
			if(!user) {
				return done(null, false, {message : 'Incorrect Username'});
			}
			

			bcrypt.compare(password, user.password, function (error, response) {
				if(response === true) {
					return done(null, user)
				}
				else {
					return done(null, false)
				}
			})
		})
	}))


app.isAuthenticated = function(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
}

app.isAuthenticatedAjax = function(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	res.send({error: 'Not Logged In'});
}


app.get('/', function(req, res){
	if(!req.session.count) {req.session.count = 0}
	res.sendFile('home.html', {root : './public/html'})
})

app.post('/createUser', userCtrl.createUser)

app.post('/loginUser', userCtrl.loginUser)

app.post('/createDog', userCtrl.createDog)

app.post('/createSalon', salonCtrl.createSalon)

app.post('/loginSalon', salonCtrl.loginSalon)


app.get('/userPage', passport.authenticate('user'), app.isAuthenticated, function(req, res){
	res.sendFile('/html/userPage.html', {root: './public'})
})

app.get('/salonPage', passport.authenticate('salon'), app.isAuthenticated, function(req, res){
	res.sendFile('/html/salonPage.html', {root: './public'})
})

app.get('/api/user', app.isAuthenticatedAjax, function(req, res){
	res.send({user:req.user})
})

app.get('/api/salon', app.isAuthenticatedAjax, function(req, res){
	res.send({user:req.user})
})

app.get('/api/getDogs/:ID', userCtrl.getDogs)

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
})















var port = 3000;
app.listen(port, function(req, res){
	console.log('Server listening on port: ' + port)
})