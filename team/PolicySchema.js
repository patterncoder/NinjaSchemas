var mongoose = require('mongoose');
var validate = require('../validators');
var sharedSchema = require('../sharedSchemas');

var policyContentSchema = new mongoose.Schema({
  title: String,
  content: {} // this will be a quilljs object
});

var policyVersionSchema = new mongoose.Schema({
  publishDate: Date,
  retireDate: Date,
  versionNotes: {},
  policy: policyContentSchema
});

var policySchema = new mongoose.Schema({
    meta: sharedSchema.metaSchema,
    companyId: Number,
    status: String,
    createdDate: Date,
    publishedDate: Date,
    importedTitle: String,
    importedText: String,
    externalId: Number,
    policy: policyContentSchema,
    updateDraft: policyContentSchema,
    publishedNotes: {},
    draftNotes: {},
    handbooks: [String],
    versions: [policyVersionSchema]

    
});
policySchema.methods = {
    // isDuesCurrent: function () { return this.duesCurrent; },
    // isAccountLockout: function () { return this.accountLockout; }
};
module.exports = policySchema;
