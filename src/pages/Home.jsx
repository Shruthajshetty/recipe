import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// 


const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/login");
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
          <a class="nav-link" href="/Receipes">Receipes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Menu">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/AboutUs">About Us</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn" type="submit">Search</button>
        <br></br>
        <button onClick={Logout} style={{backgroundColor:"#FFA500"}}>LOGOUT</button>
      
      </form>
    </div>
  </div>
</nav>
<br></br>
<div className="container">
     <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/free-photo/top-view-different-seasonings-with-vegetables-dark-space_140725-76039.jpg?w=740&t=st=1692027642~exp=1692028242~hmac=2647f44d9e1573b12cb8f6bc92e39eca78212f32a1d86b817340219fba5b538f" class="d-block w-100" width="500" height="550" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Welcome</h5>
        <p>Here are we to help you to prepare your favourite dish.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/free-photo/top-view-brown-bean-soup-delicious-cooked-soup-with-different-seasonings-dark-surface-dinner-soup-bean-food-meal_140725-74440.jpg?w=740&t=st=1692027791~exp=1692028391~hmac=9a90c648440f0dc074f751599f16f6e562e7d2163c2992343580cc3af603ada8" class="d-block w-100" alt="..." width="500" height="550"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Login </h5>
        <p>For better experience</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/premium-photo/wooden-spoons-with-various-spices-black-background_93675-87303.jpg?w=740"  width="500" height="550"class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Now you can add your Receipes</h5>
        <p>Isn't it awesome?</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

<br></br>
<div className="container">
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Breakfast</h5>
        <p class="card-text">If you want breakfast in bed, eat it in the kitchen!.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Lunch</h5>
        <p class="card-text">Ask not what you can do for your country, ask what's for lunch..</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://plus.unsplash.com/premium_photo-1684629279315-c4ebcfe56e98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Snack</h5>
        <p class="card-text">Snack time heals all wounds..</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.unsplash.com/photo-1536392706976-e486e2ba97af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Dinner</h5>
        <p class="card-text">Dinner is better when we eat together..</p>
      </div>
    </div>
  </div>
</div>
</div>
<br></br>
      <footer className="footer">
       
          <div className="row" style={{backgroundColor:"#FFA500"}}>
            
              <h3>Contact Us</h3>
              <ul>
                <li>123 Main Street</li>
                <li>City, State ZIP</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@example.com</li>
              </ul>
           
          </div>
      
        {/* <div className="footer-bottom">
        
            <div className="row">
              <div className="col-md-6">
                <span className="text-muted"style={{backgroundColor:"#000000"}}>
                  &copy; 2023 My Kitchen Website
                </span>
              </div>
              
            </div>
          </div> */}
       
      </footer>
      <ToastContainer /> 
    </>
  );
};

export default Home;