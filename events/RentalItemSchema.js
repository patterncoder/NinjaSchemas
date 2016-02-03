var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var rentalItemSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    name: {type: String,
        required: 'The rental item name is required',
        minlength: [8, 'The rental item name must be at least 8 characters'], 
        caption: 'Rental Item Name'},
    description: {type: String,
        required: 'The menu description is required',
        caption: 'Menu item Description',
        tabOrder: 20},
    price: {type:Number,
    	min: 0},
    inHouse: Boolean

});



module.exports = rentalItemSchema;