import React from 'react';
import './AboutUsPage.css';
import sannidhiImage from './sannidhi.jpg';
import shruthaImage from './shrutha.jpg';
import shreeshaImage from './shreesha.jpg';
import {Link} from "react-router-dom";
const AboutUsPage = () => {
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



    
    <div className="about-us">
      <div className="container">
      <h1>About Us</h1>
      <p>
        Welcome to OurKitchen, your culinary journey starts here. We are passionate food enthusiasts who love to cook, share, and explore delicious recipes from around the world.
      </p>
      <p>
        We believe food is the way to heart, the love language. Food reminds us of our childhood, mother's delicious lunchbox and grandmother's love. Add your essence of love to our recipes and help to enhance the taste of the dishes.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to inspire and connect people through the joy of cooking. Whether you're an experienced chef or just getting started in the kitchen, we've got something for you. You'll find a place here to learn, discover, and create culinary masterpieces.
      </p>
      <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={shruthaImage} alt="Shrutha J Shetty" />
            <p></p>
            <h3>Shrutha J Shetty</h3>
          </div>
          <div className="team-member">
            <img src={sannidhiImage} alt="Sannidhi Kaje" />
            <p></p>
            <h3>Sannidhi Kaje</h3>
          </div>
          <div className="team-member">
            <img src={shreeshaImage} alt="Shreesha P Naik" />
            <p></p>
            <h3>Shreesha P Naik</h3>
          </div>
        </div>
        <br></br>
        <h2>Contact Us</h2>
        <p>
          Have questions, suggestions, or feedback? Feel free to reach out to us at <a href="mailto:ourkitchen@gmail.com">ourkitchen@gmail.com</a>.
        </p>
      </div>
    </div>

    <br></br>
      <footer className="footer">
          <div className="row" style={{backgroundColor:"#FFA500"}}>
              <h3>Contact Us</h3>
              <ul>
                <li>SCEM</li>
                <li>Adyar,Mangalore</li>
                <li>Phone: 9876543210</li>
                <li>Email: ourkitchen@example.com</li>
              </ul>
          </div>
      </footer>
    </>
  );
};

export default AboutUsPage;