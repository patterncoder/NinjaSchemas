var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var customerSchema = mongoose.Schema({
   meta: sharedSchemas.metaSchema,
   companyName: String,
   firstName: {type: String,
        required: 'First Name is required', 
        caption: "First Name",
        normalized: String,
        tabOrder: 10},
   lastName: {type: String,
        index: true,
        required: 'Last Name is required',
        normalized: String,
        caption: "Last Name",
        tabOrder: 10},
   addresses: [sharedSchemas.address],
   emails: [sharedSchemas.email],
   phoneNumbers: [sharedSchemas.phoneNumber],
//    associatedWith: [
//        {
//            name: String,
//            notes: String
//        }
//    ],
   contracts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Contract'}],
   notes: String,
   validationErrors: [{}]

});

customerSchema.virtual('fullName').get(function(){
    return this.firstName + ' ' + this.lastName;
});

module.exports = customerSchema;