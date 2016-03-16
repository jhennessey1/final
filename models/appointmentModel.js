var mongoose = require('mongoose')

var appointmentSchema = mongoose.Schema({
	user : {},
	salon : {},
	groomer : String,
	dog : {},
	service : String,
	price : Number,
	date : String,
	time : String,
	duration : Number,
	id : String
})

module.exports = mongoose.model('appointment', appointmentSchema)