
var mongoose = require('mongoose');

var sharedSchema = require('../sharedSchemas.js');


var settingsSchema = new mongoose.Schema({
    meta: sharedSchema.metaSchema,
    tax: {
        type: Number,
        required: "Must have a tax value.",
        caption: "Tax",
        tabOrder: 10
    },
    defaultDeposit: {
        type: Number,
        caption: "Default Deposit",
        tabOrder: 20
    },
    minGratuity: {
        type: Number,
        caption: "Minimum Gratuity",
        required: "Must have a minimum gratuity percentage",
        tabOrder: 30
    },
    brandingLogo: {
        type: String,
        caption: "Branding Logo",
        required: false,
        tabOrder: 40
    }
});




module.exports = settingsSchema;





