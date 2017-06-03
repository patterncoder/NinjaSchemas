
var mongoose = require('mongoose');

var sharedSchema = require('../sharedSchemas.js');


var userSchema = new mongoose.Schema({
    meta: sharedSchema.metaSchema,
    firstName: {
        type:String,
        ref: 'User',
        required:"Users require a First Name.", 
        caption: "First Name",
        tabOrder:10
    },
    lastName: {
        type:String,
        ref: 'User',
        required:"Users require a Last Name.", 
        caption: "Last Name",
        tabOrder:20
    },
    userName: {
        username: sharedSchema.uniqueEmail.email,
        type: String,
        caption: 'Username',
        required: "Users require a User Name.",
        unique: true,
        tabOrder:30
    },
    company: {
        company:mongoose.Schema.Types.ObjectId,
        type: 'String',
        required: "Enter a Company.",
        ref:'Company',
        caption: 'Company',
        tabOrder:40
    },
    roles: [{ 
        caption: 'Roles', 
        type:String, 
        required:"User Role is required!", 
        enum: ['superUser', 'admin', 'gold', 'silver', 'bronze']
    }]
});




module.exports = userSchema;





