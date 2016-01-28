var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var Address = 
{
	addressType: String,
	primary: Boolean,	
	address1: String,	
	address2: String,	
	city: String,
	State: String,
	Zip: Number	
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
   firstName: {type: String,
        required: 'First Name is required', 
        caption: "First Name",
        tabOrder: 10},
   lastName: {type: String,
        required: 'Last Name is required',
        caption: "Last Name",
        tabOrder: 10},
   address: [Address],
   emails: [Email],
   phoneNumbers: [phoneNumber],
   contracts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contract' }]

});

module.exports = customerSchema;