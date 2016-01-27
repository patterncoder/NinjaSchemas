var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var menuItemSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    name: {type: String,
        required: 'The menu name is required',
        minlength: [8, 'The menu item name must be at least 8 characters'], 
        caption: "Menu Item Name",
        tabOrder: 10},
    description: {type: String,
        required: 'The menu description is required',
        caption: "Menu Item Description",
        tabOrder: 20},
    title: [{type: String,
        required: false,
        caption: 'Menu Item Title',
        tabOrder: 25}],
    subTitle: [{type:String,
        required: false,
        caption: 'Menu item subtitle'}],
    notes: {type:String,
        required: false,
        caption: 'Additional item information'},
    categories: [String],
    usedOnMenu: [{type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu'}],
    category: {type:String,
        required: false,
        caption: 'Type of item'},
    linkedItems: [mongoose.Schema.Types.ObjectId]
   
});

module.exports = menuItemSchema;