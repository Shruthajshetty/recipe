const mongoose = require('mongoose');

const AddRecipeSchema = new mongoose.Schema({
    recipe_name: {
        type: String,
        required: true,
        unique:true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    cookingtime: {
        type: String,
        required: true,
    },
    diet: {
        type: String,
        required: true,
    },
    creator: {
        type: String,
        required:true,
    },
    recipe_image: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("recipes", AddRecipeSchema);