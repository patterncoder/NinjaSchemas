var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');
var rentalItemSchema = require('./RentalItemSchema');

var eventStep = {
	time: { type: Date },
	duration: { type: Number, min: 0 },
	description: { type: String }
};

var menuItem = {
	sortOrder: Number,
	name: String,
	description: String,
	baseId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
	quantity: Number,
	price: Number,
	itemType: String //is this a menu item, or a divider?
};

var room = {
	name: String,
	notes: String,
	baseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Venue' },
	price: {
		type: Number,
		min: 0
	}
};

var commItem = {
	date: { type: Date, required: true },
	time: { type: Date, required: true },
	commType: {
		enum: ["Emailed", "Left Voicemail", "Met With", "Rec. Email", "Rec. Voicemail", "Talked With"],
		type: String,
		required: true
	},
	employee: { type: String, required: true },
	description: String
};

var deposit = {
	dateAdd: {
		type: Date,
		required: "Enter a deposit date."
	},
	dateComplete: { type: Date },
	amount: { type: Number },
	description: { type: String }
};

var staffMember = {
	memberName: { type: String, required: true },
	jobTitle: { type: String, required: true },
	price: { type: Number }
};

var contractSchema = mongoose.Schema({
	meta: sharedSchemas.metaSchema,
	customer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Customer',
		required: 'Contracts require a customer.',
		caption: 'Customer',
		tabOrder: 10
	},
	eventName: {
		type: String,
		required: "An event name is required like 'Smith Rehearsal Dinner'",
		caption: "Event Name",
		tabOrder: 20
	},
	description: String,
	assignedStaff: [staffMember],
	natureOfEvent: String,
	serviceType: { type: String, enum: ['plated', 'buffet', 'mixer', 'hybrid'] },
	initialContactDate: { type: Date },
	eventDate: {
		type: Date,
		required: "Enter an event date.",
		caption: "Event Date",
		tabOrder: 30
	},
	time: { type: Date },
	endTime: { type: Date },
	price: {
		type: Number,
		min: 0
	},

	eventSteps: [eventStep],

	rentalItems: [rentalItemSchema],
	venue: [room],
	venues: [room], //banquetNinja has a bug doesn't use venue but venues.
	menuItems: [menuItem],
	commLog: [commItem],
	deposits: [deposit],
	status: { type: String, enum: ['pending', 'booked', 'complete', 'abandoned'] },
	notes: String,
	banquetAttendeeHigh: {
		type: Number,
		min: 1
	},
	banquetAttendeeLow: {
		type: Number,
		min: 0
	}
});

module.exports = contractSchema;