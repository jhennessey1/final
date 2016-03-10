var mongoose = require('mongoose')

var dogSchema = mongoose.Schema({
	name : String,
	breed : String,
	weightClass : Number,
	rabies : {},
	id : String
	// id is carried over from user info to link dog and user data
	// Price linked to breed factory after prices are entered? 
})

module.exports = mongoose.model('dog', dogSchema)