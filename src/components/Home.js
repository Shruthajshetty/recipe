import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
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
       
        <div className="footer-bottom">
        
            <div className="row">
              <div className="col-md-6">
                <span className="text-muted">
                  &copy; 2023 My Kitchen Website
                </span>
              </div>
              
            </div>
          </div>
       
      </footer>





      <Outlet />
    </>
  );
};

export default Home;
