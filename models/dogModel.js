var mongoose = require('mongoose')

var dogSchema = mongoose.Schema({
	name : String,
	breed : String,
	weight : Number,
	rabies : {}
	// Price linked to breed factory after prices are entered? 
})

module.exports = mongoose.model('Dog', dogSchema)