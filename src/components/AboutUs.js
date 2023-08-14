
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container" >
      <h1>About Us</h1>
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne" style={{backgroundColor:"#FFA500"}}>
            <h5 className="mb-0">
            Shrutha's Kitchen
            </h5>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
              <h4> Welcome to our food app, your ultimate culinary companion! We are passionate about bringing delicious food experiences to your fingertips, making your dining adventures easy, enjoyable, and unforgettable.

                  At our core, we believe that good food has the power to bring people together and create lasting memories. Whether you're a seasoned foodie or just starting your culinary journey, our app is designed to cater to all tastes and preferences.</h4>
            </div>
          </div>
        </div>
        <div className="card" >
          <div className="card-header" id="headingTwo" style={{backgroundColor:"#FFA500"}}>
            <h5 className="mb-0">
             Adress
            </h5>
          </div>
            <div className="card-body" >
            <ul>
                <li>123 Main Street</li>
                <li>City, State ZIP</li>
                
              </ul>
            </div>
          </div>
        <div className="card" >
          <div className="card-header" id="headingFour" style={{backgroundColor:"#FFA500"}}>
            <h5 className="mb-0">
              Contact Details
            </h5>
          </div>
            <div className="card-body">
            <li>Phone: (123) 456-7890</li>
                <li>Email: info@example.com</li>
            </div>
          </div>
      </div>
    </div>
  );
};

export default AboutUs;
