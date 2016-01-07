var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var rentalItemSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    title: String,
	description: String	,
	customer: customer,
	eventSteps: [eventStep],
	rentalItems: [String],
	venue: String,
	menuItems: [String],
	commLog: [commItem],
	status: [String],
	notes: String


});

var eventStep =
{
	time: Number,
	duration: Number,
	description: String
}

var commLog =
{
	date: Date,
	commType: String,
	rep: String,
	description: String
}


module.exports = rentalItemSchema;