var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var customerSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
	firstName: String,
	lastName: String,
	address: Address,
	emails: [Email],
	phoneNumbers: [PhoneNumber],
	contracts: [String] //contract IDs go here
});

var Address = 
{
	addressType: String,
	primary: Boolean,
	address1: String,
	address2: String,
	city: String,
	state: String,
	zip: Number
}

var Email =
{
	emailType: String,
	primary: Boolean,
	email: String
}

var phoneNumber =
{
	phoneType: String,
	primary: Boolean,
	number: Number

}

module.exports = customerSchema;