var mongoose = require('mongoose')

var appointmentSchema = mongoose.Schema({
	user : String,
	salon : String,
	dog : String,
	service : {},
	time : Number
})

module.exports = mongoose.model('appointment', appointmentSchema)