var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var menuItemSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    name: {type: String,
        required: 'The menu name is required',
        caption: "Menu Item Name",
        tabOrder: 10},
    description: {type: String,
        required: 'The menu description is required',
        caption: "Menu Item Description",
        tabOrder: 20},
    title: {type: String,
        required: true,
        caption: 'Menu Item Title',
        tabOrder: 25},
    subTitle: String,
    summary: String,
    category: String,
   
    variations: [{name:String,description:String}],
});

module.exports = menuItemSchema;

