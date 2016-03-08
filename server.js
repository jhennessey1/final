var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


var app = express();

mongoose.connect('mongodb://localhost/final');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
	res.sendFile('home.html', {root : './public/html'})
})










var port = 3000;
app.listen(port, function(req, res){
	console.log('Server listening on port: ' + port)
})