import React from "react";
import { useState, useEffect } from "react";
import "./ShippingList.css";
import axios from "axios";

function ShippingList() {
  const [items, setitems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      var url = "http://localhost:3001/students";
      var response = await axios.get(url);
      setitems(response.data);
    } catch (error) {
      console.log("Axios error ", error);
    }
  }

  return (
    <div className="block">
      <div>
        <table style={inputBox}>
          <thead>
            <th>TITLE</th>
            <th>WEIGHT</th>
            <th>COLOR</th>
            <th>DESTINATION</th>
          </thead>
          <tbody>
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
