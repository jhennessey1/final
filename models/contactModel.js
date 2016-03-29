var mongoose = require('mongoose')

var contactSchema = mongoose.Schema({
	name : { type : String, required : true},
	email : {type : String, required : true},
	message : {type : String, required : true},
	date : {type : String, required : true}
})


module.exports = mongoose.model('contact', contactSchema)