var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
	email : { type : String, required : true, unique : true},
	password : { type : String, required : true},
	name : { type : String, required : true},
	phone : { type : Number, required : true},
	type : String
})

module.exports = mongoose.model('user', userSchema)