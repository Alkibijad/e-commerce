import React from "react";
import { useContext } from "react";
import { dataContext } from "../App";
import Product from "./Product";



function TopSellers() {
  
  const { db} = useContext(dataContext)

  function getTopSix() {
    let copyDB = [...db];
    let topSix = [];
      for (let i = 0; i < 6; i++) {
      let rand = Math.floor(Math.random() * copyDB.length);
      topSix.push(copyDB[rand]);
      copyDB.splice(rand, 1);
    }
    return topSix;
  }

  return (
    <div className="top-sellers">
      {getTopSix().map((topProduct) => {
        return <Product key={topProduct.id} product={topProduct} />;
      })}
    </div>
  );
}

export default TopSellers;
