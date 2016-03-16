var mongoose = require('mongoose')

var appointmentSchema = mongoose.Schema({
	user : {},
	salon : {},
	groomer : String,
	dog : {},
	service : {},
	price : Number,
	date : String,
	time : String,
	duration : Number
})

module.exports = mongoose.model('appointment', appointmentSchema)