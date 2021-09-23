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
        required: true,
        caption: "A time is required.",
        tabOrder: 15,
    },
    commType: {
        type: String,
        required: true,
        caption: "We need to know what kind of comm this is.",
        tabOrder: 20
    },
    employee: {
        type: String,
        required: true,
        tabOrder: 30
    },
    description: {
        type: String,
        tabOrder: 40
    }
});

module.exports = CommEntrySchema;