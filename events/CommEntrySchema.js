var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var CommEntrySchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    date: {
        type: Date,
        required: true,
        caption: "Date is required to make a comm entry.",
        tabOrder: 10
    },
    time: {
        type: Date,
        // disabled for OTD historical data.
        // required: true,
        // caption: "A time is required.",
        tabOrder: 15,
    },

    commType: {
        type: String,
        enum: ["Emailed", "Left Voicemail", "Met With", "Rec. Email", "Rec. Voicemail", "Talked With"],
        required: true,
        caption: "We need to know what kind of comm this is.",
        tabOrder: 20
    },
    employee: {
        type: String,
        //disabled for OTD historical data
        // required: true,
        tabOrder: 30
    },
    description: {
        type: String,
        tabOrder: 40
    }
});

module.exports = CommEntrySchema;