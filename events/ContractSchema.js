var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var eventStep =
{
	time: {type: Number,
		required: true},
	duration: {type: Number,
		min:0},
	description: {type:String,
		required: true}
}

var commItem =
{
	date: {type:Date,
		required: true},
	commType: {type: String,
		required: true},
	rep: {type: String,
		required: true},
	description: String
}

var contractSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    title: {type: String,
    	required: true},
	description: String,
	date: {type: Date,
		required: true},
	price: {type: Number,
		min: 0},
	customer: {type: mongoose.Schema.Types.ObjectId,
		ref: 'Customer',
		required: true},
	eventSteps: [eventStep],
	rentalItems: [{type: mongoose.Schema.Types.ObjectId, ref: 'RentalItem'}],
	venue: {type: mongoose.Schema.Types.ObjectId, ref: 'Venue'},
	menuItems: [{type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem'}],
	commLog: [commItem],
	status: [String],
	notes: String

});

module.exports = contractSchema;