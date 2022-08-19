import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { dataContext } from "../App";
import Product from "./Product";

function TopSellers() {
  const { db } = useContext(dataContext);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    getTopSix();
  }, []);

  function getTopSix() {
    let copyDB = [...db];
    let topProduct = [];
    for (let i = 0; i < 6; i++) {
      let rand = Math.floor(Math.random() * copyDB.length);
      topProduct.push(copyDB[rand]);
      copyDB.splice(rand, 1);
    }
    setTopProducts(topProduct);
  }

  return (
    <div className="top-sellers">
      {topProducts.length > 0 &&
        topProducts.map((topProduct, index) => {
          return <Product key={index} product={topProduct} />;
        })}
    </div>
  );
}

export default TopSellers;
