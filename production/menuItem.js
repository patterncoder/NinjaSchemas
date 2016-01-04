var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var menuItemSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    name: {type: String,
        required: 'The menu name is required',
        uiLabel: "Menu Item Name"},
    description: {type: String,
        required: 'The menu description is required',
        uiLabel: "Menu Item Description"},
    title: {type: String},
    subTitle: String,
    summary: String,
    category: String,
   
    variations: [{name:String,description:String}],
});

module.exports = menuItemSchema;

