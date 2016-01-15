var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var Contact = 
{
	name: String,
	phone: Number,
	email: String
}

var rentalItemSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    name: String,
    price: Number,
    inHouse: Boolean,
    contact: Contact

});



module.exports = rentalItemSchema;