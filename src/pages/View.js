// import React, { useEffect, useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import Axios from "axios";
// function MyRecipes() {
//     const [fdata, setFData] = useState([]);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [filteredBooks, setFilteredBooks] = useState(fdata);
  
//     useEffect(() => {
//       const filtered = fdata.filter(
//         (book) =>
//           book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           book.genre.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredBooks(filtered);
//     }, [fdata, searchQuery]);
    
  
  
//     useEffect(() => {
//       Axios.get("http://localhost:4000/recipe").then((res) => {
//         setFData(res.data);
//       });
//     }, []);
  
  
  
//     const handleDelete = (recipeId) => {
//       // Send a DELETE request to the server
//       Axios.delete(`http://localhost:4000/recipe/${recipeId}`)
//         .then((res) => {
//           // Update the list of books after successful deletion
         
//           setFData(fdata.filter((recipe) => recipe._id !== recipeId));
//         })
//         .catch((error) => {
//           alert(error);
            
//           console.error("Error deleting book:", error);
//         });
//     };
  
//     return (
//       <>
//         <div className="myrecipe-container">
        
        
       
//           <div className="animated-search-container">
//             <div className="input-group">
//               <input
//                 type="text"
//                 placeholder="Search by recipe name, cooking time, or nutritional ingridients"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="form-control animated-search-input"
//               />
//               <div className="input-group-prepend">
//                 <span className="input-group-text animated-search-icon">
//                   <FaSearch />
//                 </span>
//               </div>
//             </div>
//           </div>
  
  
  
//         <h3 className="text-center mt-4 mb-3" style={{ color: "orange", fontWeight: "bold", fontSize: "34px" }}>
//    Recipes for you
//   </h3>
  
  
//   <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//     {filteredBooks.map((recipe) => (
//       <div className="col-md-2 col-lg-2 col-sm-6 mb-4" key={recipe._id}>
//         <div className="card shadow-sm">
//           <img
//             src={recipe.recipe_image}
//             className="card-img-top"
//             alt="Recipe pic"
//             style={{ height: "300px", objectFit: "cover" }}
//           />
//           <div className="card-body">
//             <h5 className="card-title">{recipe.recipe_name}</h5>
//             <p className="card-text">
//               <strong>Ingredients:</strong> {recipe.ingredients}
//             </p>
//             <p className="card-text">
//               <strong>Instructions:</strong> {recipe.instructions}
//             </p>
//             <p className="card-text">
//               <strong>Cooking Time:</strong> {recipe.cookingtime}
//             </p>
//             <p className="card-text">
//               <strong>Nutritional Info :</strong> {recipe.diet}
//             </p>
//             <p className="card-text">
//               <strong>Chef:</strong> {recipe.creator}
//             </p>
//             <div className="d-flex justify-content-center align-items-center mt-3">
//               <a href={`/update/${recipe._id}`} className="btn btn-primary me-2">
//                 Update
//               </a>
//               <button
//                 className="btn btn-danger"
//                 onClick={() => handleDelete(recipe._id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>     
//         </div>
//       </>
//     );
//   }
  
//   export default MyRecipes;
// RecipeView.js
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Axios from "axios";

function MyRecipes() {
  const [fdata, setFData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Renamed from filteredRecipes

  useEffect(() => {
    // Create a function to filter recipes based on the search query
    const filterRecipes = () => {
      const filtered = fdata.filter((recipe) =>
        recipe.recipe_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.cookingtime.toString().includes(searchQuery) ||
        recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredRecipes(filtered);
    };

    filterRecipes(); // Initial filtering

    // Use a timer to update the filtered recipes after a brief delay
    const timer = setTimeout(filterRecipes, 500);

    return () => clearTimeout(timer); // Cleanup timer
  }, [fdata, searchQuery]);

  useEffect(() => {
    Axios.get("http://localhost:4000/recipe")
      .then((res) => {
        console.log(res.data); // Add this line to check the API response
        setFData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);
  const handleDelete = (recipeId) => {
    Axios.delete(`http://localhost:4000/recipe/${recipeId}`)
      .then(() => {
        // Update the list of recipes after successful deletion
        setFData((prevData) => prevData.filter((recipe) => recipe._id !== recipeId));
      })
      .catch((error) => {
        alert("Error deleting recipe: " + error.message);
        console.error("Error deleting recipe:", error);
      });
  };

  return (
    <>
      <div className="myrecipe-container">
        <div className="animated-search-container">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search by recipe name, cooking time, or nutritional ingredients"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control animated-search-input"
            />
            <div className="input-group-prepend">
              <span className="input-group-text animated-search-icon">
                <FaSearch />
              </span>
            </div>
          </div>
        </div>

        <h3 className="text-center mt-4 mb-3" style={{ color: "", fontWeight: "bold", fontSize: "34px" }}>
          Recipes for you
        </h3>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredRecipes.map((recipe) => (
            <div className="col-md-2 col-lg-2 col-sm-6 mb-4" key={recipe._id}>
              <div className="card shadow-sm">
                <img
                  src={recipe.recipe_image}
                  className="card-img-top"
                  alt="Recipe pic"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.recipe_name}</h5>
                  <p className="card-text">
                    <strong>Ingredients:</strong> {recipe.ingredients}
                  </p>
                  <p className="card-text">
                    <strong>Instructions:</strong> {recipe.instructions}
                  </p>
                  <p className="card-text">
                    <strong>Cooking Time:</strong> {recipe.cookingtime}
                  </p>
                  <p className="card-text">
                    <strong>Nutritional Info:</strong> {recipe.diet}
                  </p>
                  <p className="card-text">
                    <strong>Chef:</strong> {recipe.creator}
                  </p>
                  <div className="d-flex justify-content-center align-items-center mt-3">
                    <a href={`/update/${recipe._id}`} className="btn btn-primary me-2">
                      Update
                    </a>
                    <button className="btn btn-danger" onClick={() => handleDelete(recipe._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyRecipes;