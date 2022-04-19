var mongoose = require('mongoose');
var validate = require('./validators');

exports.metaSchema =  {
            dateCreated: { type: Date, default: Date.now },
            dateLastMod: {type: Date},
            company: {type:mongoose.Schema.Types.ObjectId, ref:'Company'}
};

exports.address = {
	addressType: {type:String, enum: ['home', 'work', 'other', 'unknown']},
	primary: {type: Boolean},	
	address1: {type: String, required: 'At least one address line is required'},	
	address2: String,	
	city: {type: String, required: 'City is required'},
	state: {type: String, required: 'Two Digit state code is required'},
	zip: {type: String, required: 'Postal code is required'}	
};

exports.phoneNumber = {
    contactType: {type:String, enum: ['home', 'work', 'cell', 'other']},
    primary: {type: Boolean},
    number: {
        type:String,
        // validate: validate.validators.phoneNumberValidator,
        required: 'Phone number is required'
    }
};

exports.phoneNumField = {
        type:String,
        trim: true,
        validate: validate.validators.phoneNumberValidator
};

exports.emailField = {
    type: String,
    trim: true,
    validate: validate.validators.emailValidator
};

exports.email = {
    emailType: {type:String, enum: ['accountAdmin', 'personal', 'work', 'other']},
    primary: {type: Boolean},
    email: {
        type: String,
        trim: true,
        required: 'Email is required',
        validate: validate.validators.emailValidator
    }
    
};

exports.uniqueEmail = {
    emailType: {type:String, enum: ["accountAdmin", 'personal', 'work', 'other']},
    primary: {type: Boolean},
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'Email is required',
        validate: validate.validators.emailValidator
    }
    
};