
var mongoose = require('mongoose');
var sharedSchema = require('../sharedSchemas');

var IngredientLineItem = {
  quantity: Number,
  unit: String,
  // unitId: {type: mongoose.Schema.Types.ObjectId, ref: 'Unit'},
  name: String,
  ingredientId: {type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'},
  prepNotes: String
}

var RecipeLineItem = {
  quantity: Number,
  unit: String,
  // unitId: {type: mongoose.Schema.Types.ObjectId, ref: 'Unit'},
  name: String,
  recipeId: {type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'},
  prepNotes: String
}

var recipeSchema = new mongoose.Schema({
        meta: sharedSchema.metaSchema,
        name: {type: String, 
            required: "{PATH} is required.",
            caption: "Ingredient Name"},
        otdId: Number,
        description: {type: String, 
            caption: "Description"},
        notes: String,
        categories: [String],
        prepTime: Number,

        stations: [String],
        skillLevel: Number,
        shelfLife: Number,
        storageInstructions: String,
        yield: String,
        developer: String,
        instructions: String,
        ingredients: [IngredientLineItem],
        recipes: [RecipeLineItem]
});

module.exports = recipeSchema;
