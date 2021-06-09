var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var rentalItemSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    name: {
        type: String,
        required: 'The rental item name is required',
        //minlength: [8, 'The rental item name must be at least 8 characters'], 
        caption: 'Rental Item Name',
        tabOrder: 10
    },
    // description: {type: String,
    //     required: 'The menu description is required',
    //     caption: 'Description',
    //     tabOrder: 20},
    price: {
        type:Number,
    	min: 0
    },
    quantity: Number,
    inHouse: Boolean

});


// db.contracts2
//   .find({ "legacyId": "2" }).forEach((doc) => {
//     doc.rentalItems.forEach((ri) => {
//       ri.baseId = ObjectId(`"${ri.baseId}"`);
//     })
//     db.contracts2.save(doc);
//   });




module.exports = rentalItemSchema;