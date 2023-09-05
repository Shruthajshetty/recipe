
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./view.css"
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
        recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase())||
        recipe.diet.toLowerCase().includes(searchQuery.toLowerCase())||
        recipe.creator.toLowerCase().includes(searchQuery.toLowerCase())
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
      .then((res) => {
        if (res.status === 200) {
          // Recipe deleted successfully
          setFData((prevData) => prevData.filter((recipe) => recipe._id !== recipeId));
        } else {
          alert("Error deleting recipe: " + res.data.message);
          console.error("Error deleting recipe:", res.data.message);
        }
      })
      .catch((error) => {
        alert("Error deleting recipe: " + error.message);
        console.error("Error deleting recipe:", error.message);
      });
  };

  return (
    <>

<nav class="navbar navbar-expand-lg bg-body-primary" style={{backgroundColor:"#FFA500"}}>
  <div class="container-fluid">
  <img src="https://www.zarla.com/images/zarla-our-kitchen-1x1-2400x2400-20211105-h3rkb8t4qvc74kx6bjpt.png?crop=1:1,smart&width=250&dpr=2" width="150" height="150" alt="Logo" className="logo" />
    <a class="navbar-brand" href="#"></a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/view">Receipes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/AboutUs">About Us</a>
        </li>
      </ul>
      <input
              type="text"
              placeholder="Search by recipe name, cooking time, or nutritional ingredients"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control animated-search-input"
            />
            <span className="input-group-text animated-search-icon">
                <FaSearch />
              </span>
      <Link to="/login">
        <button style={{ backgroundColor: "#FFA500" }}>Logout</button>
      </Link>
    </div>
  </div>
</nav>









      <div className="myrecipe-container">
        

        <h3 className="text-center mt-4 mb-3" style={{ color: "#FFFFFFF", fontWeight: "bold", fontSize: "34px" }}>
          Recipes for you
        </h3>

        <div className="row g-4">
          {filteredRecipes.map((recipe) => (
            <div className="col-md-6 mb-4" key={recipe._id}>
              <div className="card shadow-sm">
                <img
                  src={recipe.recipe_image}
                  className="card-img-top"
                  alt="Recipe pic"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.recipe_name}</h5>
                  <br></br>
                  <p className="mb-2 user-input">
                    <strong>Ingredients:</strong> {recipe.ingredients}
                  </p>
                  <br></br>
                  <p className="card-text">
                    <strong>Instructions:</strong> {recipe.instructions}
                  </p>
                  <br></br>
                  <p className="card-text">
                    <strong>Cooking Time:</strong> {recipe.cookingtime}
                  </p>
                  <br></br>
                  <p className="card-text">
                    <strong>Nutritional Info:</strong> {recipe.diet}
                  </p>
                  <br></br>
                  <p className="card-text">
                    <strong>Chef:</strong> {recipe.creator}
                  </p>
                  <br></br>
                  <div className="d-flex justify-content-center align-items-center mt-3">
                    <a href={`/update/${recipe._id}`} className="btn btn-success me-2">
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
