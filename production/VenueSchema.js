var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var venueSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    name: String,
    description: String,
    capacity: Number,
    price: Number,
    notes: String
});

module.exports = venueSchema;