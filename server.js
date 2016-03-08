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
var User = require('./models/userModel.js')

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


var bcrypt = require('bcryptjs')
passport.use(new LocalStrategy({
	usernameField : 'email'
		},
	function(username, password, done){
		User.findOne({ username : username}, function (err, user) {
			console.log('looking for user')
			if(err) {return done(err)}
			if(!user) {
				return done(null, false);
			}

			bcrypt.compare(password, user.password, function (error, response) {
				console.log('checking password')
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

app.post('/loginUser', function(req, res, next){
	console.log('Authenticating: Step 3')
	passport.authenticate('local', function(err, user, info){
		console.log('Step: 4')
		if(err) {return next(err)}
		if(!user) {return res.send({error: 'something went wrong'})}
		req.logIn(user, function(err){
			if(err) { return next(err)}
			return res.send({success: 'success'})
		})
	})(req, res, next);
})


app.get('/userPage', app.isAuthenticated, function(req, res){
	res.sendFile('/html/userPage.html', {root: './public'})
})

app.get('/api/user', app.isAuthenticatedAjax, function(req, res){
	res.send({user:req.user})
})

















var port = 3000;
app.listen(port, function(req, res){
	console.log('Server listening on port: ' + port)
})