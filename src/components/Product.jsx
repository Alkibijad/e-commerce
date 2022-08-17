import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="top-sellers_card">
    
      <p className="top-sellers_title">{product.title}</p>
      <img src={product.thumbnail} alt="" />
      <Link className="top-sellers_btn" to={"/Shop/" + product.id}>
        Read more
      </Link>
    </div>
  );
}

export default Product;
