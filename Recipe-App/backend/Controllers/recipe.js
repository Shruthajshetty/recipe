const User= require("../Models/recipe");
const recipes=require("../Models/recipe");
module.exports.AddRecipe = async (req, res, next) => {
    try {
      const {recipe_name ,ingredients,instructions, cookingtime,diet,creator,recipe_image} = req.body;
      const existingUser = await User.findOne({ recipe_name });
      if (existingUser) {
        return res.json({ message: "Recipe already exists" });
      }
      
      const recipe = await User.create({ recipe_name,ingredients,instructions, cookingtime,diet,creator,recipe_image });
      
      
      res
        .status(201)
        .json({ message: "Recipe added succesfully", success: true,recipe});
      next();
    } catch (error) {
      console.error(error);
    }
  };
  module.exports.DeleteRecipe = async (req, res, next) => {
    try {
        const deleteRecipe = await recipes.findByIdAndDelete(req.params.id);
        if (!deleteRecipe ) {
          return res.status(404).json({ success: false, message: "Recipe not found" });
        }
        res.status(200).json({ success: true, message: "Recipe deleted successfully" });
      } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
      }
    
  };
  module.exports.GetRecipe = async (req, res) => {
    try {
        const recipe = await recipes.findById(req.params.id);
        if (!recipe ) {
          return res.status(404).json({ message: "Recipe not found" });
        }
        res.status(200).json(book);
      } catch (error) {
        res.status(500).json({ message: "Error fetching Recipe by ID" });
      }
    };
    module.exports.UpdateRecipe = async (req, res) => {
      try {
        const recipeId = req.params.id;
        const updatedRecipe = req.body;
        const result = await User.findByIdAndUpdate(recipeId, updatedRecipe, {
          new: true,
        });
        if (!result) {
          return res.status(404).json({ message: "Recipe not found" });
        }
        res.json(result);
      } catch (error) {
        console.error("Error updating Recipe", error);
        res.status(500).json({ message: "Error updating Recipe", error: error.message });
      }
    };
        module.exports.ViewRecipe = async (req, res, next) => {
            try {
              const recipe = await recipes.find();
              res.json(recipe);
            } catch (error) {
              res.status(500).json({ error: 'An error occurred while fetching recipe' });
            }
        };