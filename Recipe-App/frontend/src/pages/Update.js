import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import {  toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import "./update.css"
function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setrecipe] = useState({
    recipe_name: "",
    ingredients:"",
    instructions:"",
    cookingtime:"",
    diet:"",
    creator:"", 
    recipe_image:"",
  });

  useEffect(() => {
    Axios.get(`http://localhost:4000/recipe/${id}`).then((res) => {
      setrecipe(res.data);
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setrecipe((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setrecipe({
          ...recipe,
          recipe_image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.put(`http://localhost:4000/recipe/${id}`, recipe);
      console.log("Recipe updated:", response.data);
      if (response.status === 200) {
        toast.success("Recipe updated successfully", {
          position: "bottom-left",
        });
        setTimeout(() => {
          navigate("/view");
        }, 1000);
      } else {
        toast.error("Recipe update failed", {
          position: "bottom-left",
        });
      }
    } catch (error) {
      console.error("Error updating recipe:", error);
      toast.error("Error updating recipe", {
        position: "bottom-left",
      });
    }
  };
  return (
<>
<center>
<div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
        
          <form   onSubmit={handleUpdate} >
            <h1 class="heading">Update</h1>
            <br class="break"></br>
            <img src={recipe.recipe_image} className="card-img-top" alt="Card" />
            <br></br>
            <hr></hr>
            <div class="formbold-input-flex">
                    <label class="formbold-form-label">
                    image
                    </label>
                    <input
                      type="file"
                      class="formbold-form-input"
                      id="recipe_image"
                      placeholder='.jpeg file'
                      onChange={handleImageChange}
                      accept="image/*"
                    ></input>
                  </div>
              <div class="formbold-input-flex">
                <div>
                    <input
                     type="text"
                     name="recipe_name"
                     value={recipe.recipe_name}
                     onChange={handleInputChange}
                    
                  
                    class="formbold-form-input"
                     />
                    <label  class="formbold-form-label">Recipe Name</label>
                </div>
                <div>
                    <input
                    class="formbold-form-input"
                    type="text"
                    name="ingredients"
                    value={recipe.ingredients}
                    onChange={handleInputChange}
                    
                   
                    />
                    <label  class="formbold-form-label">Ingredients</label>
                </div>
              </div>
              <div class="formbold-input-flex">
                <div>
                    <input
                    class="formbold-form-input"
                    type="text"
                    name="instructions"
                    value={recipe.instructions}
                    onChange={handleInputChange}
                    
                    
                    />
                    <label class="formbold-form-label"> Instructions </label>
                </div>
                <div>
                    <input
                    class="formbold-form-input"
                    type="text" 
                    name="cookingtime"
                    value={recipe.cookingtime}
                    onChange={handleInputChange}
                   />
                    <label class="formbold-form-label"> Cooking time</label>
                </div>
              </div>
              <div class="formbold-input-flex">
                <div>
                    <input
                    class="formbold-form-input"
                    type="text"
                    name="diet"
                    value={recipe.diet}
                    onChange={handleInputChange}
                    
                    
                    />
                    <label class="formbold-form-label"> Nutritional Info</label>
                </div>
                <div>
                    <input
                    class="formbold-form-input"
                    type="text" 
                    name="creator"
                    value={recipe.creator}
                    onChange={handleInputChange}
                   />
                    <label class="formbold-form-label">Chef</label>
                </div>
              </div>
              <div class="formbold-bottom">
              <button   class="formbold-btn" type="button" ><a class="formbold-anchor "  href="/view">Cancel</a></button>
              <button 
              class="formbold-btn"
              type="submit" >
                  Submit
              </button>
              
              
              </div>
          </form>
        </div>
      </div>


      </center>



    </>
  );
}

export default Update;
