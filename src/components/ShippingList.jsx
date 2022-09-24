import React from "react";
import { useState } from "react";
import "./ShippingList.css";
import Form from "./Form";

function ShippingList() {
  console.log("INSIDE ShippingList()");

  const [items, setitems] = useState([]);

  function addToList(item) {
    console.log("INSIDE ShippingList() val-> ", item);

    const itemsCopy = [...items];
    itemsCopy.push(item);
    setitems(itemsCopy);
  }

  function tableData() {
    console.log("INSIDE tableData()");

    items.map((item) => {
      return (
        <tr key={item.title}>
          <td>{item.title}</td>
          <td>{item.weight}</td>
          <td>{item.color}</td>
          <td>{item.place}</td>
        </tr>
      );
    });
  }

  return (
    <div className="block">
      <div>
        <Form addToListCallback={(item) => addToList(item)} />
      </div>
      <div>
        <table style={inputBox}>
          <thead>
            <th>TITLE</th>
            <th>WEIGHT</th>
            <th>COLOR</th>
            <th>DESTINATION</th>
          </thead>
          <tbody>
            {/* {tableData} */}
            {items.map((item) => {
              return (
                <tr key={item.title}>
                  <td>{item.title}</td>
                  <td>{item.weight}</td>

                  <td style={{ backgroundColor: item.color }}>
                    <div>{item.color}</div>
                  </td>
                  <td>{item.destination}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShippingList;

const inputBox = {
  boxShadow: "0 3px 3px rgb(0 0 0 / 0.2)",
};
