var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');
var rentalItemSchema = require('./RentalItemSchema');

var eventStep = {
	time: { type: Date },
	endTime: { type: Date },
	duration: { type: Number, min: 0 },
	description: { type: String }
};

var menuItem = {
	sortOrder: Number,
	printOnHandoutMenu: Boolean,
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
	time: { type: Date },
	commType: {
		enum: ["Emailed", "Left Voicemail", "Met With", "Rec. Email", "Rec. Voicemail", "Talked With"],
		type: String,
		required: true
	},
	employee: { type: String },
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


var additionalContact = mongoose.Schema ({
	firstName: String,
	lastName: String,
	email: sharedSchemas.emailField,
	cellPhone: sharedSchemas.phoneNumField,
	homePhone: sharedSchemas.phoneNumField,
	relationToCustomer: String
});

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
	serviceType: { type: String, enum: ['plated', 'buffet', 'family', 'mixer', 'hybrid'] },
	beverageServiceType: { type: String, enum: ['hosted', 'hosted limited selection', 'cash and carry', 'private bar'] },
	initialContactDate: { type: Date },
	eventDate: {
		type: Date,
		required: "Enter an event date.",
		caption: "Event Date",
		tabOrder: 30
	},
	time: { type: Date },
	endTime: { type: Date },
	startTime24: String,
	endTime24: String,
	price: {
		type: Number,
		min: 0
	},
	bidFBMinimum_old: {type: Number},
	eventSteps: [eventStep],
	rentalItems: [rentalItemSchema],
	venue: [room],
	venues: [room], //banquetNinja has a bug doesn't use venue but venues.
	menuItems: [menuItem],
	commLog: [commItem],
	deposits: [deposit],
	additionalContacts: {
		type: [ additionalContact ]
	},
	status: { type: String, enum: ['pending', 'booked', 'complete', 'abandoned'] },
	notes: String,
	staffNotes: String,
	addPageBreak: Boolean,
	banquetAttendeeHigh: {
		type: Number,
		min: 1
	},
	banquetAttendeeLow: {
		type: Number,
		min: 0
	}
});

contractSchema.methods.getBookedRoomsNames = function (cb) {
	const venues = this.venues.toObject();
	return venues.map(v => v.name).join("|");
}

contractSchema.methods.getCustomerInfoParts = function (cb) {
	let customerInfo = this.customer.toObject();
	let customerParts = [];
	let companyName = customerInfo.companyName;
	if (companyName) customerParts.push(companyName);
	let name = `${customerInfo.firstName} ${customerInfo.lastName}`;
	customerParts.push(name);
	if(customerInfo.addresses.length > 0) {
		console.log('lets build the address');
	}
	if(customerInfo.phoneNumbers.length > 0) {
		const nums = customerInfo.phoneNumbers.map(pn => {
			return `${pn.number}${pn.contactType ? ` (${pn.contactType})` : ''}`
		}).join(' | ');
		customerParts.push(nums);
	}
	if(customerInfo.emails.length > 0) {
		const emails = customerInfo.emails.map(em => {
			return `${em.email}${em.emailType? ` (${em.emailType})` : ''}`
		}).join('|');
		customerParts.push(emails);
	}
	return customerParts;
}

contractSchema.methods.getAdditionalContacts = function () {
	let contacts = (Array.from(this.additionalContacts)).map(contact => contact.toObject());
	return contacts;
}

contractSchema.methods.getAttendeeRange = function (cb) {
	const high = this.banquetAttendeeHigh;
	const low = this.banquetAttendeeLow;
	let count;
	if (high === low) {
		count = `${high} ppl`
	} else if ((low !== 0 && low !== null) && (high !== 0 && high !== null) && low < high) {
		count = `${low}-${high} ppl`;
	} else {
		count = `${high || low} ppl`
	}
	return count;
}

contractSchema.methods.getFandBMinimum = function (cb) {
	let rooms = this.venues;
	let total = rooms.reduce((accum, room) => {
		accum += room.price;
		return accum;
	}, 0)
	if (total > 0) {
		return `$${total.toFixed(2)}`;
	} else if (this.bidFBMinimum_old > 0) {
		return `$${this.bidFBMinimum_old.toFixed(2)}`;
	} else {
		return `No minimum set`;
	}
}

module.exports = contractSchema;