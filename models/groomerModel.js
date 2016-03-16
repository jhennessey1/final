var mongoose = require('mongoose')

var groomerSchema = mongoose.Schema({
	name : { type : String, required : true},
	pic : {},
	id : String,
	schedule : {}
})


module.exports = mongoose.model('groomer', groomerSchema)