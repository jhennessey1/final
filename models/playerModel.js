var mongoose = require('mongoose');

var playerSchema = mongoose.Schema({
	name : {type : String, require : true},
	pic : {},
	password : {type : String, required : true}
})

module.exports = mongoose.model('player', playerSchema)