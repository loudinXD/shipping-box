import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/">Shipping Form</Link>
      <Link to="/list">Shipping List</Link>
    </div>
  );
}

export default NavBar;
