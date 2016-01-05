var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var rentalItemSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    name: String,
    price: Number,
    inHouse: boolean,
    contact: Contact

});

var Contact = 
{
	name: String,
	phone: Number,
	email: String
}

module.exports = rentalItemSchema;