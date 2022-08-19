import React from "react";
import { useContext } from "react";
import { dataContext } from "../../App";
import Header from "../Header";
import Product from "../Product";

function ShopPage() {
const {db} = useContext(dataContext)
  return (
    <div>
      <Header title="Buy local products" />
      <div className="top-sellers">
        {db.map((el, index) => (
          <Product key={index} product={el} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
