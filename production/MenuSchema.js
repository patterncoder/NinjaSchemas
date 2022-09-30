var mongoose = require('mongoose');
var sharedSchema = require('../sharedSchemas');

var menuItemPriceSchema = new mongoose.Schema({
    price: {type:Number, default: 0},
    priceFor: String
});

var menuItemSchema = new mongoose.Schema({
        menuItemId: mongoose.Schema.Types.ObjectId,
        name: {type: String, required: "{PATH} is required."},
        title: String,
        description: String,
        prices: [menuItemPriceSchema],
        price: String
});

var menuSectionSchema = new mongoose.Schema({
        title: {
            type: String, 
            required: "{PATH} is required.",
            tabOrder: 10
        },
        subtitle: String,
        items: [menuItemSchema],
        footer: String,
        printOrder: Number
});


var menuSchema = new mongoose.Schema({
        meta: sharedSchema.metaSchema,
        name: {type: String, 
            required: "{PATH} is required.",
            caption: "Menu Name"},
        description: {type: String, 
            // required: "{PATH} is required.",
            caption: "Description"},
        title: {type: String, 
            required: "{PATH} is required.",
            caption: "Title"},
        subtitle: String,
        summary: String,
        sections: [menuSectionSchema],
        footer: String,
        notes: String
});

module.exports = menuSchema;
