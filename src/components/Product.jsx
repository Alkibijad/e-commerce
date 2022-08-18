import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../App";
import BtnAddToCart from "./BtnAddToCart";

function Product({ product }) {
  const { selectedProduct } = useContext(dataContext)
  
  return (
    <div className="top-sellers_card">
    
      <p className="top-sellers_title">{product.title}</p>
      <img src={product.thumbnail} alt="" />
      <Link className="top-sellers_btn" to={"/Shop/" + product.id}>
        Read more
      </Link>
      <BtnAddToCart/>
     
    </div>
  );
}

export default Product;
