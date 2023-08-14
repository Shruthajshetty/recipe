import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useState } from "react";
import Axios from "axios";

function Update() {
  const [fdata, setFdata] = useState({
    title: "",
    ingredients:"",
    instuctions:"",
    cookingtime:"",
    nutritionalinfo:"",
    chef:"",
  });

  const params = useParams(); //get id from url
  let id = params.id;

  //*****fetch data  */
  useEffect(() => {
    Axios.post("http://localhost:4000/get", { id: id }).then((res) => {
      let data = res.data;
      console.log(data);
      setFdata(...data);
    });
  }, [id]);

  //*************change handler */
  const ChangeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setFdata({ ...fdata, [name1]: val });
  };

  //*************submit handler */
  const UpdateHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/update", fdata).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        alert("data inserted successfully");
      } else {
        alert("data not inserted");
      }
    });
  };
  //"/Addresource" element={<AddResource />
  return (
    <>
     
     <hr></hr>
   <center><div style={{
              backgroundColor: "orange",
              width: "20%",
              margin: "10px",
            }}><h4>Enter  The Reciepe</h4></div></center> 
<br></br>
    <center><form onSubmit={ChangeHandler}>
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
      <input
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
      <button type="submit">Update</button>
    </form>
    </center>
    </>
  );
}

export default Update;
