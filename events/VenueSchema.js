var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var venueSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    name: {type: String,
        required: 'The venue name is required',
        minlength: [8, 'The venue item name must be at least 8 characters'],
        caption: 'Venue item description',
        tabOrder: 20},
    description: String,
    capacity: Number,
    price: Number,
    notes: String
});

module.exports = venueSchema;