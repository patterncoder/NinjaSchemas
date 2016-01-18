var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var eventStep =
{
	time: Number,
	duration: Number,
	description: String
}

var commItem =
{
	date: Date,
	commType: String,
	rep: String,
	description: String
}

var contractSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    title: String,
	description: String	,
	customer: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
	eventSteps: [eventStep],
	rentalItems: [{type: mongoose.Schema.Types.ObjectId, ref: 'RentalItem'}],
	venue: {type: mongoose.Schema.Types.ObjectId, ref: 'Venue'},
	menuItems: [{type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem'}],
	commLog: [commItem],
	status: [String],
	notes: String

});

module.exports = contractSchema;