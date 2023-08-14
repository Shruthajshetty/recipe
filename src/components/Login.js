import {  Link } from "react-router-dom";

const Login = () => {
    return ( 

<body>
  <div class="container" >
    <div class="row">
      <div class="col-md-3 col-sm-12"></div>
      <div class="col-md-6 col-sm-12">
        <div class="card ">
          <div class="card-body">
            <h5 class="card-title">User Login</h5>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"></input>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Don't You have Account?<a href="/Register">Click Here</a></label>
              </div>
              <button type="submit" class="btn"  style={{backgroundColor:"#FFA500"}}><a href="/Menu" style={{color:"white",textDecoration:"none"}}>Login</a></button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-12"> </div>
    </div>
  </div>
</body>

     );
}
 
export default Login;