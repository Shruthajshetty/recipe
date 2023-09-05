import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import { useState } from "react";
import axios from "axios";
const Services=()=> {
  const [inputValue,setInputValue] = useState({
    recipe_name: "",
    ingredients:"",
    instructions:"",
    cookingtime:"",
    diet:"",
    creator:"", 
    recipe_image:"",
  });
  const { recipe_name , ingredients, instructions , cookingtime, diet,creator,recipe_image} = inputValue;

  const handleOnChange = (e) => {
    const {id, value } = e.target;
    setInputValue({
      ...inputValue,
      [id]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const chef = new FileReader();
      chef.onloadend = () => {
        setInputValue({
          ...inputValue,
          recipe_image: chef.result,
        });
      };
      chef.readAsDataURL(file);
    }
  };


 

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const { data } = await axios.post(
          "http://localhost:4000/addrecipe",
          {
            ...inputValue,
          },
          { withCredentials: true   }
        );
        const { success, message } = data;
        if (success) {
          alert("Recipe Added Successfully !!!")
         
        } else {
          
          alert(message)
        }
      } catch (error) {
        console.log(error);
      }
      setInputValue({
        ...inputValue,
        recipe_name: "",
        ingredients:"",
        instuctions:"",
        cookingtime:"",
        diet:"",
        creator:"", 
        recipe_image:"",
        
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
      
      <Link to="/login">
        <button style={{ backgroundColor: "#FFA500" }}>Logout</button>
      </Link>
    </div>
  </div>
</nav>


<br></br>
    <div class="container-fluid">
        <div class="row">
        <div class=" col-sm-12 col-md-4 col-lg-2">
            </div>
            <div class=" col-sm-12 col-md-4 col-lg-3">
                <div class="card">
                    <img src="https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1657531944940.jpg-org"  alt="" width="auto" height="250px"></img>                
                    <div class="card-body">
                        <h5 class="card-title">Add Recipe</h5>
                        <button type="button" class="btn btn-success"  data-bs-toggle="modal" data-bs-target="#exampleModal"> Add</button>
                    </div>
                </div>
            </div>
            <div class=" col-sm-12 col-md-4 col-lg-2">
            </div>
            <div class=" col-sm-12 col-md-4 col-lg-3">
                <div class="card">
                    <img src="https://plus.unsplash.com/premium_photo-1661265967105-f8afb13a8135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9wJTIwdmlldyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" width="auto" height="250px"></img>
                    <div class="card-body">
                        <h5 class="card-title">View Recipes</h5>
                        <a href="/view" class="btn btn-success" style={{backgroundcolor:"#FFA500"}}>View</a>
                    </div>
                </div>
            </div>
            <div class=" col-sm-12 col-md-4 col-lg-2">
            </div>
        </div>
    </div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Recipes to the kitchen</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
        <form  onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Recipe Name
                    </label>
                    <input
                       type="text"
                       className="form-control"
                       id="recipe_name"
                       placeholder="Enter recipe name"
                       value={recipe_name}
                       onChange={handleOnChange}
                       required
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Ingredients
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="ingredients"
                        placeholder="Enter ingredients"
                        value={ingredients}
                        onChange={handleOnChange}
                        required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      instructions
                    </label>
                    <input
                       type="text"
                       className="form-control"
                       id="instructions"
                       placeholder="Enter instructions"
                       value={instructions}
                       onChange={handleOnChange}
                       required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Cooking time
                    </label>
                    <input
                     type="text"
                     className="form-control"
                     id="cookingtime"
                     placeholder="Enter the cooking time"
                     value={cookingtime}
                     onChange={handleOnChange}
                     required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Nutritional Details
                    </label>
                    <input
                     type="text"
                     className="form-control"
                     id="diet"
                     placeholder="Enter the   Nutritional Details"
                     value={diet}
                     onChange={handleOnChange}
                     required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                     Creater
                    </label>
                    <input
                     type="text"
                     className="form-control"
                     id="creator"
                     placeholder="Enter the   Chef name"
                     value={creator}
                     onChange={handleOnChange}
                     required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      class="form-control"
                      id="recipe_image"
                      placeholder='.jpeg file'
                      onChange={handleImageChange}
                      
                      accept="recipe_image/*"
                    ></input>
                  </div>
                <div class="modal-footer">
                <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn">Add Recipe</button>
                </div>

                </form>
   </div> 
      </div>
      
    </div>
  </div>
</div>
   
      <ToastContainer/>
  </>
  
);
}

export default Services;