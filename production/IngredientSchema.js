
var mongoose = require('mongoose');
var sharedSchema = require('../sharedSchemas');

var unit = {
    name: String,
    usedForInventory: Boolean
}

var conversion = {
    unitFrom: String,
    unitTo: String,
    conversion: {
        type: String,
        number: Number
    }
}

var purchaseUnit = {
    unit: String,
    conversions: [conversion],
    vendorDetail: [String]

}

var purchaseUnitVendorDetail = new mongoose.Schema({
    vendor: String,
    quotes: [{
        date: Date,
        price: Number
    }],
    pricesPaid: [{
        date: Date,
        price: Number
    }]
});

var ingredientSchema = new mongoose.Schema({
        meta: sharedSchema.metaSchema,
        name: {type: String, 
            required: "{PATH} is required.",
            caption: "Ingredient Name"},
        otdId: Number,
        // description: {type: String, 
        //     required: "{PATH} is required.",
        //     caption: "Description"},
        categories: [String],
        shelfLife: Number,
        storageInstructions: String,
        notes: String,
        // units: [String],
        // purchaseUnits: [purchaseUnit],
        // usedIn: [String]
});

module.exports = ingredientSchema;
