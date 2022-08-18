import React, { useContext, useEffect, useState } from "react";
import { dataContext } from "../App";

function BtnAddToCart({ id }) {
  const { dispatch, selectedProduct,dispatchSelected } = useContext(dataContext);
  const [btnSwitch, setBtnSwitch] = useState(false);

  useEffect(() => {
    findProduct()
  }, [selectedProduct]);

  function findProduct() {
    dispatchSelected({
      type: "set_selected_product",
      payload: id,
    });
  }

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
