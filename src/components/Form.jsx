import React from "react";
import { useState } from "react";
import "./Form.css";
function Form(props) {
  const [itemName, setItemName] = useState("");
  const [itemColor, setItemColor] = useState("#000000");
  const [itemWeight, setItemWeight] = useState(0);
  const [itemDestination, setItemDestination] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    var data = {
      title: itemName,
      color: itemColor,
      weight: itemWeight,
      destination: itemDestination,
    };
    props.addToListCallback(data);
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <form style={form} onSubmit={handleSubmit}>
        <label id="title">SHIPPING FORM</label>

        <div id="innerForm">
          <label>Item name:</label>

          <input
            style={inputBox}
            type="text"
            name="name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <br></br>
          <label>Box Color:</label>

          <input
            style={inputBox}
            type="color"
            name="color"
            value={itemColor}
            onChange={(e) => setItemColor(e.target.value)}
          />
          <br></br>

          <label>Item weight:</label>

          <input
            style={inputBox}
            type="number"
            name="weight"
            value={itemWeight}
            onChange={(e) => setItemWeight(e.target.value)}
          />
          <br></br>

          <label>Destination:</label>

          <input
            style={inputBox}
            type="text"
            name="destination"
            value={itemDestination}
            onChange={(e) => setItemDestination(e.target.value)}
          />
          <br></br>

          <button
            style={placeOrder}
            className="placeOrder"
            type="submit"
            // value="Place Order"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

const form = {
  boxShadow: "0 10px 10px rgb(0 0 0 / 0.2)",
};

const inputBox = {
  boxShadow: "0 3px 3px rgb(0 0 0 / 0.2)",
};

const placeOrder = {
  //   backgroundColor: "black",
  //   color: "white",
  //   fontSize: 24,
  // width: 150,
  // height: 50,
  boxShadow: "0 3px 3px rgb(0 0 0 / 0.2)",
};
