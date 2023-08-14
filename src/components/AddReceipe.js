import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import Axios from "axios";
function AddReceipe() {
    const myStyle={
    backgroundColor:"orange"
  }
  const [fdata, setFdata] = useState({
    title: "",
    ingredients:"",
    instuctions:"",
    cookingtime:"",
    nutritionalinfo:"",
    chef:"",
    
  });
const [msg, setMsg] = useState();

//*************change handler */
const ChangeHandler = (e) => {
  let name1 = e.target.name;
  let val = e.target.value;
  setFdata({ ...fdata, [name1]: val });
};

//*************submit handler */
const SubmitHandler = (e) => {
  e.preventDefault();
  Axios.post("http://localhost:4000/ins", { fdata }).then((res) => {
    let ack = res.data;
    if (ack === "success") {
      setMsg("Data inserted successful");
      console.log(msg);
      alert("Thank u for helping others to learn");
    } else {
      setMsg("Data not inserted ");
      console.log(msg);
      alert("data not inserted");
    }
  });
};
return (
  <>
    <hr></hr>
   <center><div style={{
              backgroundColor: "orange",
              width: "20%",
              margin: "10px",
            }}><h4>Enter  The Reciepe</h4></div></center> 
<br></br>
    <center><form onSubmit={SubmitHandler}>
      <label > &nbsp;  &nbsp; &nbsp; &nbsp;Title:  &nbsp;  &nbsp; </label>
      <input
        type="text"
        name="title"
        placeholder="Enter title"
        value={fdata.title}
        onChange={ChangeHandler}
      />
      <br></br>
      <br></br>

      <label>&nbsp;Ingredients:  &nbsp; &nbsp;    </label>
      <textarea type ="text"
      name="ingredients"
      placeholder="Enter ingredients"
      value={fdata.content}
      onChange={ChangeHandler}
      > </textarea>
      <br></br>
      <br></br>
      <label> &nbsp; &nbsp;&nbsp;&nbsp;Instructions: &nbsp; &nbsp; &nbsp;</label>
      <textarea
        type="text"
        name="instructions"
        placeholder="Enter the instructions"
        value={fdata.vediolink}
        onChange={ChangeHandler}
      />
      <br></br>
      <br></br>
      <label> &nbsp; &nbsp;&nbsp;&nbsp;Cookingtime: &nbsp; &nbsp; &nbsp;</label>
      <input
        type="text"
        name="cookingtime"
        placeholder="Enter the cooking time"
        value={fdata.vediolink}
        onChange={ChangeHandler}
      />
      <br></br>
      <br></br>
      <label> &nbsp; &nbsp;Chef:  &nbsp; &nbsp;&nbsp;</label>
      <input
        type="text"
        name="chef"
        placeholder="Enter your name"
        value={fdata.author}
        onChange={ChangeHandler}
      />

      <br></br>
      <br></br>
      <button type="submit">Insert</button>
    </form>
    </center>
  </>
  
);
}

export default AddReceipe;