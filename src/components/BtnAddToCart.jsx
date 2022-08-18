import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../App";

function BtnAddToCart({ selectedProduct }) {
  const { dispatch } = useContext(dataContext);
  const [btnSwitch, setBtnSwitch] = useState(false);

  useEffect(() => {
    console.log(selectedProduct);
  }, []);

  function btnEVO() {
    setBtnSwitch(true);
    dispatch({ type: "add_to_cart", payload: selectedProduct });
    setTimeout(() => {
      setBtnSwitch(false);
    }, 1000);
  }

  return (
    <>
      {!btnSwitch ? (
        <button className="btn" onClick={btnEVO}>Add to cart</button>
      ) : (
        <button className="btn"> added</button>
      )}
    </>
  );
}

export default BtnAddToCart;
