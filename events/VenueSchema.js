var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var booking = {
    dateStart: Date,
    dateEnd: Date,
    eventID: {type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem'}
}

var venueSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    name: {type: String,
        required: 'The venue name is required',
        //minlength: [8, 'The venue item name must be at least 8 characters'],
        caption: 'Venue Name',
        tabOrder: 20},
    description: String,
    capacity: {type: Number,
    	min: 0},
    price: {type: Number,
    	min: 0},
    roomFeatures: String,
    maps: [String],
    notes: String,
    bookings: [],
    // Added for restaurant-ninja-api's event-availability feature: distinguishes real
    // bookable event rooms from back-of-house/utility spaces also stored in this
    // collection, and lets a stale/duplicate/malformed entry (e.g. old combo-names like
    // "North/Balcony/Rotunda/South") be excluded going forward without deleting it.
    isEventSpace: {type: Boolean, default: false},
    archived: {type: Boolean, default: false}
});


venueSchema.methods = {

};

module.exports = venueSchema;