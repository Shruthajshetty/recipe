const Register = () => {
    return ( 
        <>
             <div class="container">
        <div class="row ">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <form class="row g-3 " style={{backgroundColor:"#FFA500"}}>
                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">Email</label>
                      <input type="email" class="form-control" id="inputEmail4"></input>
                    </div>
                    <div class="col-md-6">
                      <label for="inputPassword4" class="form-label">Password</label>
                      <input type="password" class="form-control" id="inputPassword4"></input>
                    </div>
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">Address</label>
                      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                    </div>
                    <div class="col-12">
                      <label for="inputAddress2" class="form-label">Address 2</label>
                      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                    </div>
                    <div class="col-md-6">
                      <label for="inputCity" class="form-label">City</label>
                      <input type="text" class="form-control" id="inputCity"></input>
                    </div>
                    <div class="col-md-4">
                      <label for="inputState" class="form-label">State</label>
                      <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="col-md-2">
                      <label for="inputZip" class="form-label">PIN</label>
                      <input type="text" class="form-control" id="inputZip"></input>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-light "><a href="/Menu" style={{ color:"blue",textDecoration:"none"}}>Sign-in</a></button>
                    </div>
                  </form>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
        </>
     );
}
 
export default Register;