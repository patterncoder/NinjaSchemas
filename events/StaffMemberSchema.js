var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var staffMemberSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    memberName: {
        type: String,
        required: 'The staff member name is required',
        //minlength: [8, 'The rental item name must be at least 8 characters'], 
        caption: 'Staff Member Name',
        tabOrder: 10
    },
    jobTitle: {
        type: String,
        required: 'The staff member job title is required',
        caption: 'Staff Member Job Title',
        tabOrder: 20
    },
    price: {
        type:Number,
    	min: 0
    },
});

module.exports = staffMemberSchema;