var mongoose = require('mongoose')

var serviceSchema = mongoose.Schema({
	name : String,
	price : [],
	time : [],
	id : String
})

module.exports = mongoose.model('service', serviceSchema)