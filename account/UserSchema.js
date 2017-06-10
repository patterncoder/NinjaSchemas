
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
    username: {
        username: sharedSchema.uniqueEmail.email,
        type: String,
        caption: 'Username',
        required: "Users require a User Name.",
        unique: true,
        tabOrder:30
    },
    password: {
        type:String, 
        caption: 'Password',
        minlength: [8, 'The password must be at least 8 characters'], 
        required:'Password is required',
        tabOrder:40
        },
    company: {
        company:mongoose.Schema.Types.ObjectId,
        type: 'String',
        // required: "Enter a Company.",
        ref:'Company',
        caption: 'Company',
        tabOrder:50
    },
    roles: { 
        type:String, 
        ref: 'User',
        required:"User Role is required!", 
        caption: 'Roles', 
        enum: ['superUser', 'admin', 'gold', 'silver', 'bronze'],
        tabOrder:60,
    }
});




module.exports = userSchema;





