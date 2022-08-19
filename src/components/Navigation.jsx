import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { AiOutlineShoppingCart } from "react-icons/ai";
import MenuList from "./MenuList";
import { dataContext } from "../App";

function Navigation() {
  const { cartProducts } = useContext(dataContext);

  return (
    <div className="navbar">
      <Logo />
      <MenuList navbar={"navbar_items"} />
      <Link to="/Shop-Cart">
        <AiOutlineShoppingCart />

        {cartProducts.length > 0 && (
          <span className="cart-items-num">{cartProducts.length}</span>
        )}
      </Link>
    </div>
  );
}

export default Navigation;
