var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');


// var Address = 
// {
// 	addressType: String,
// 	primary: Boolean,	
// 	address1: String,	
// 	address2: String,	
// 	city: String,
// 	state: String,
// 	zip: Number	
// }

// var Email =
// {
// 	emailType: String,
// 	primary: Boolean,
// 	email: String
// }

// var phoneNumber =
// {
// 	contactType: String,
// 	primary: Boolean,
// 	number: String
// }

var customerSchema = mongoose.Schema({
   meta: sharedSchemas.metaSchema,

   firstName: {type: String,
        required: 'First Name is required', 
        caption: "First Name",
        normalized: String,
        tabOrder: 10},
   lastName: {type: String,
        required: 'Last Name is required',
        normalized: String,
        caption: "Last Name",
        tabOrder: 10},
   //address: [Address],
   addresses: [sharedSchemas.address],
   emails: [sharedSchemas.email],
   phoneNumbers: [sharedSchemas.phoneNumber],

   contracts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Contract'}],
   notes: String

});

customerSchema.virtual('fullName').get(function(){
    return this.firstName + ' ' + this.lastName;
});

module.exports = customerSchema;