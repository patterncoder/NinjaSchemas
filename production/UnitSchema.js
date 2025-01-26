
var mongoose = require('mongoose');
var sharedSchema = require('../sharedSchemas');


var unitSchema = new mongoose.Schema({
        meta: sharedSchema.metaSchema,
        name: {type: String, 
            required: "{PATH} is required.",
            caption: "Ingredient Name"},
        otdId: Number,
        description: {type: String, 
            caption: "Description"},
        type: String,
        notes: String,
});

module.exports = unitSchema;
