var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var eventStep = {
	time: {type: Date},
	duration: {type: Number, min:0},
	description: {type:String}
};

var menuItem = {
    sortOrder: Number,
    name: String,
    description: String,
    baseId : {type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem'},
    quantity: Number,
    price: Number
};

var room = {
	name: String,
	notes: String,
	baseId: {type: mongoose.Schema.Types.ObjectId, ref: 'Venue'}
};

var commItem = {
	date: {type:Date, required: true},
	commType: {type: String, required: true},
	employee: {type: String, required: true},
	description: String
};

var contractSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    customer: {type: mongoose.Schema.Types.ObjectId,
		ref: 'Customer',
        required: 'Contracts require a customer.',
        caption: 'Customer',
        tabOrder: 10},
    eventName: {type: String,
    	required: "An event name is required like 'Smith Rehearsal Dinner'",
        caption: "Event Name",
        tabOrder: 20},
	//description: String,
	natureOfEvent: String,
	serviceType: {type:String, enum: ['plated', 'buffet', 'mixer', 'hybrid']},
    initialContactDate: {type: Date},
	eventDate: {type: Date,
		required: "Enter an event date.",
        caption: "Event Date",
        tabOrder: 30},
    startTime: {type: Date},
	price: {type: Number,
		min: 0},
	
	eventSteps: [eventStep],

	rentalItems: [],
	venue: [room],
	menuItems: [menuItem],
	commLog: [commItem],
	status: {type:String, enum: ['pending', 'booked', 'complete', 'abandoned']},
	notes: String,
    banquetAttendeeHigh: {
		type:Number,
		min: 1
	},
    banquetAttendeeLow: {
		type:Number,
		min: 0
	}			
});

module.exports = contractSchema;