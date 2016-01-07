var mongoose = require('mongoose');
var sharedSchemas = require('../sharedSchemas');

var lookupsSchema = mongoose.Schema({
    meta: sharedSchemas.metaSchema,
    menuItemTags: [String],
    contactTags: [String]


});