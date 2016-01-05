var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var menuItemSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    name: {type: String,
        required: 'The menu name is required',
        minlength: [8, 'The menu item name must be at least 8 characters'],
        match: /^a/, 
        caption: "Menu Item Name",
        tabOrder: 10},
    description: {type: String,
        required: 'The menu description is required',
        caption: "Menu Item Description",
        tabOrder: 20},
    title: {type: String,
        required: false,
        caption: 'Menu Item Title',
        tabOrder: 25},
    subTitle: String,
    summary: String,
    category: String,
   
    variations: [{name:String,description:String}],
});

module.exports = menuItemSchema;

