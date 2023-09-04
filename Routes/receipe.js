const router = require("express").Router();
const recipeController = require("../Controllers/recipe.controller");

router.post("/addreciepe", recipeController.createRecipe);
router.get("/", recipeController.getAllRecipe);

module.exports = router;