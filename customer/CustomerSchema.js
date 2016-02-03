var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var Address = 
{
	addressType: String,
	primary: Boolean,	
	address1: String,	
	address2: String,	
	city: String,
	state: String,
	zip: String	
}

var Email =
{
	emailType: String,
	primary: Boolean,
	email: String
}

var phoneNumber =
{
	contactType: String,
	primary: Boolean,
	number: String
}

var customerSchema = mongoose.Schema({
   meta: sharedSchemas.metaSchema,
   firstName: String,
   lastName: String,
   addresses: [Address],
   emails: [Email],
   phoneNumbers: [phoneNumber],
   contracts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contract' }],
   notes: String

});

module.exports = customerSchema;