const { Login, Signup } = require("../Controllers/AuthController");
const {userVerification} =require("../Middlewares/AuthMiddleware")
const router = require("express").Router();
const {AddRecipe,DeleteRecipe,GetRecipe,UpdateRecipe,ViewRecipe }=require("../Controllers/recipe");
router.post("/", userVerification);
router.post("/signup", Signup);
router.post('/login', Login);
router.post("/addrecipe", AddRecipe);
 router.get("/recipe",ViewRecipe );
router.put("/recipe/:id",UpdateRecipe );
router.get("/recipe/:id",GetRecipe );
router.delete("/recipe/:id",DeleteRecipe );
module.exports = router;
// router.get("/recipe", async (req, res) => {
//     try {
//       // Your existing code to fetch recipes
//       const recipes = await Recipe.find();
//       res.status(200).json(recipes);
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   });


