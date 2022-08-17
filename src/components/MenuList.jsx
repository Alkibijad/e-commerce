import React from "react";
import { Link } from "react-router-dom";

function MenuList({ navbar }) {
 

  return (
    <div className={navbar}>
      <Link to="/">Home</Link>
      <Link to="/Shop">Shop</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  );
}

export default MenuList;
