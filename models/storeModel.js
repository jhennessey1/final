var mongoose = require('mongoose')

var salonSchema = mongoose.Schema({
	username : {type : String, required : true, unique : true},
	password : {type : String, required : true},
})

module.exports = mongoose.model('salon', salonSchema)