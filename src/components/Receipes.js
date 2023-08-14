import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Reciepes() {
  const [fdata, setFData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000").then((res) => {
      console.log(res.data);
      setFData(res.data);
    });
  }, []);

  //******************delete db data */
  const deleteHandler = (e) => {
    console.log(e);
    Axios.post("http://localhost:4000/delete", { id: e }).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        alert("data deleted not succesful");
      } else {
        alert("data deleted succesful");
      }
    });
  };
//
  return (
    <>
      <div>
        {fdata.map((sdata) => {
          return (
            <div
              style={{
                backgroundColor: "orange",
                width: "auto",
                float: "left",
                margin: "10px",
              }}
              key={sdata._id}
            >
              <h3
              style={{
                color: "black",
                 margin: "10px",
               }} >{sdata.title}</h3>
              <br></br>
              <h3
              style={{
                color: "black",
                 margin: "10px",
               }} >{sdata.ingredients}</h3>
              <br></br>
              <h3
              style={{
                color: "black",
                 margin: "10px",
               }} >{sdata.instructions}</h3>
              <br></br>
              <h3
              style={{
                color: "black",
                 margin: "10px",
               }} >{sdata.cookingtime}</h3>
              <br></br>
             <h4 style={{
                color: "purple",
                 margin: "10px",
               }}> {sdata.nutritionalinfo}</h4>
              <br></br>

             <h7 style={{
               color: "blue",
                margin: "10px",
              }} >C {sdata.chef}</h7> 
              <br></br>
              <h5> &nbsp;&nbsp;&nbsp;By-{sdata.chef}</h5>
              <br></br>
              <button type="submit" onClick={() => deleteHandler(sdata._id)}>
                delete
              </button>
              --
              <Link to={{ pathname: `/update/${sdata._id}` }}>Update</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Reciepes;
