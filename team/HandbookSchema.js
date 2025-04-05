var mongoose = require('mongoose');
var validate = require('../validators');
var sharedSchema = require('../sharedSchemas');

var PolicyPointer = new mongoose.Schema({
  policyId: {type: mongoose.Schema.Types.ObjectId, ref: 'Policy'},
  title: String
});

var Booklet = new mongoose.Schema({
    title: String,
    introSnippet: {},
    introduction: {},
    conclusion: {},
    policies: [PolicyPointer]
});

var Handbook = new mongoose.Schema({
  meta: sharedSchema.metaSchema,
  externalId: Number,
  companyId: Number,
  sortOrder: Number,
  department: String,
  importDescription: String,
  introduction: {},
  conclusion: {},
  booklets: [Booklet]
  
});

Handbook.methods = {
    // isDuesCurrent: function () { return this.duesCurrent; },
    // isAccountLockout: function () { return this.accountLockout; }
};
module.exports = Handbook;
