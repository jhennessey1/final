var mongoose = require('mongoose')

var storeSchema = mongoose.Schema({
	name : String,
	id : Number
})

module.exports = mongoose.model('Store', storeSchema)