import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { dataContext } from "../App";
import Product from "./Product";

function TopSellers() {
  const { db } = useContext(dataContext);
  const [topProducts, setTopProduct] = useState([]);
  
  useEffect(() => {
    getTopSix();
  }, []);

  function getTopSix() {
    let copyDB = [...db];
    let topSix = [];
    for (let i = 0; i < 6; i++) {
      let rand = Math.floor(Math.random() * copyDB.length);
      topSix.push(copyDB[rand]);
      copyDB.splice(rand, 1);
    }
    setTopProduct(topSix);
    // return topSix;
  }

  return (
    <div className="top-sellers">
      {topProducts.map((topProduct) => {
        return <Product key={topProduct.id} product={topProduct} />;
      })}
    </div>
  );
}

export default TopSellers;
