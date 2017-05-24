
var mongoose = require('mongoose');

var sharedSchema = require('../sharedSchemas.js');


var userSchema = new mongoose.Schema({
    meta: sharedSchema.metaSchema,
    firstName: {type:String, required:"{PATH} is required!", caption: "First Name"},
    lastName: {type:String, required:"{PATH} is required!", caption: "First Name"},
    username: sharedSchema.uniqueEmail.email,
    // {
    //     type: String,
    //     required: "{PATH} is required.",
    //     unique: true
    // },
    company: {type:mongoose.Schema.Types.ObjectId, ref:'Company'},
    //adding security fields here
    salt: {type:String},
    hashed_pwd: {type:String},
    roles: [{type:String, enum: ['superUser', 'admin', 'gold', 'silver', 'bronze']}]

});




module.exports = userSchema;





