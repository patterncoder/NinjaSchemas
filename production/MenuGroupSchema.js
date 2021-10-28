var mongoose = require('mongoose');
var sharedSchema = require('../sharedSchemas');

var menuGroupSchema = mongoose.Schema({
    meta: sharedSchema.metaSchema,
    name: {type: String,
        required: 'The menu group name is required',
        //minlength: [8, 'The menu item name must be at least 8 characters'], 
        caption: "Menu Group Name",
        tabOrder: 10},
    description: {type: String,
        // required: 'The menu group description is required',
        caption: "Menu Group Description",
        tabOrder: 20},
    title: String,
    subtitle: String,
    summary: String,
    menus: [ {
        menuId: String,
        title: String,
        subtitle: String
    }  ]
        
});

module.exports = menuGroupSchema;
