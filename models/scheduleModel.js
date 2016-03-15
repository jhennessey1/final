var mongoose = require('mongoose')


var scheduleSchema = mongoose.Schema({
	monday : [],
	tuesday : [],
	wednesday : [],
	thursday : [],
	friday : [],
	saturday : [],
	sunday : [],
	id : String,
	// salonId : String
})


module.exports = mongoose.model('schedule', scheduleSchema)