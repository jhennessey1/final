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
var damnItCtrl = require('./controllers/damnItCtrl.js')

var User = require('./models/userModel.js')
var Dog = require('./models/dogModel.js')
var Player = require('./models/playerModel.js')


var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done){
	var key = {
		id : user.id,
		type : user.type
	}
	done(null, key);
});

passport.deserializeUser(function(key, done){
	key.type.findById(key.id, function(err, user){
		done(err, user)
	});
});





var bcrypt = require('bcryptjs')

passport.use(new LocalStrategy({
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
	
app.validateUser = function(req, res, next) {
	if(req.user.type === ("User" || undefined)) {
		return next()
	}
	res.redirect('/grumr')
}

app.validateSalon = function(req, res, next) {
	if(req.user.type === ("Salon" || undefined)) {
		return next()
	}
	res.redirect('/grumr')
}

app.validateAdmin = function(req, res, next) {
	if(req.user.email === "joseph.e.hennessey@gmail.com") {
		return next()
	}
	res.redirect('/')
}

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


app.get('/grumr', function(req, res){
	if(!req.session.count) {req.session.count = 0}
	res.sendFile('home.html', {root : './public/html'})
})

app.post('/grumr/createUser', userCtrl.createUser)

app.post('/grumr/loginUser', userCtrl.loginUser)

app.post('/grumr/createDog', userCtrl.createDog)

app.post('/grumr/addGroomer', salonCtrl.addGroomer)

app.post('/grumr/addService', salonCtrl.addService)

app.post('/grumr/setSchedule', salonCtrl.setSchedule)

app.post('/grumr/updateGroomerSchedule', salonCtrl.updateGroomerSchedule)

app.post('/grumr/createAppointment', userCtrl.createAppointment)

app.post('/grumr/removeGroomer', salonCtrl.removeGroomer)

app.post('/grumr/removeService', salonCtrl.removeService)

app.post('/grumr/removeAppointment', userCtrl.removeAppointment)

app.post('/grumr/removeDog', userCtrl.removeDog)

app.post('/createPlayer', damnItCtrl.createPlayer)

app.post('/loginAdmin', userCtrl.loginUser)

app.post('/submitMessage', userCtrl.submitMessage)

app.post('/deleteMessage', userCtrl.deleteMessage)








app.get('/grumr/userPage', app.isAuthenticated, app.validateUser, function(req, res){
	res.sendFile('/html/userPage.html', {root: './public'})
})

app.get('/grumr/salonPage', app.isAuthenticated, app.validateSalon, function(req, res){
	res.sendFile('/html/salonPage.html', {root: './public'})
})

app.get('/adminPage', app.isAuthenticated, app.validateAdmin, function(req, res) {
	res.sendFile('/html/adminPage.html', {root : './public'})
})

app.get('/grumr/api/user', app.isAuthenticatedAjax, function(req, res){
	res.send({user:req.user})
})

app.get('/grumr/api/salon', app.isAuthenticatedAjax, function(req, res){
	res.send({user:req.user})
})

app.get('/grumr/api/getDogs/:ID', userCtrl.getDogs)

app.get('/grumr/api/getSalons', userCtrl.getSalons)

app.get('/grumr/api/getGroomers/:ID', salonCtrl.getGroomers)

app.get('/grumr/api/getServices/:ID', salonCtrl.getServices)

app.get('/grumr/api/getSchedules/:ID', salonCtrl.getSchedules)

app.get('/grumr/api/getAppointments/:ID', userCtrl.getAppointments)

app.get('/grumr/api/getGroomerAppointments/:ID', salonCtrl.getGroomerAppointments)

app.get('/api/getPlayers', damnItCtrl.getPlayers)

app.get('/api/getMessages', userCtrl.getMessages)


app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
})

app.get('/', function(req, res){
	res.sendFile('/html/landingPage.html', {root : './public'})
})

app.get('/damnIt', function(req, res) {
	res.sendFile('/html/damnIt.html', {root : './public'})
})

app.get('/demoSite', function(req, res) {
	res.sendFile('/html/TapInfluence_Test/index.html', {root : './public'})
})














var port = 3000;
app.listen(port, function(req, res){
	console.log('Server listening on port: ' + port)
})