import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../App";
import Header from "./Header";



function ShopCart() {
  const { cartProducts, dispatch } = useContext(dataContext);


  useEffect(() => {
    totalCartPrice();
  });

  function totalCartPrice() {
    let totalPrice = 0;
    let totalNumofItems = 0;

    cartProducts.forEach((el) => {
      totalPrice += el.count * el.price;
      totalNumofItems += el.count;
    });

    return { price: totalPrice, itemNum: totalNumofItems };
  }

  function changeCount(num, index) {
    let copyCartProducts = [...cartProducts];

    copyCartProducts[index].count += num;

    
    if (copyCartProducts[index].count === 0) {
      copyCartProducts.splice(index, 1);
    }

    dispatch({ type: "setCart", payload: copyCartProducts });
  }

  function noItems() {
    return (
      <div className="noItems">
        <p>No items in your cart</p>
        <Link to="/Shop">Go back to shoping</Link>
      </div>
    );
  }
  function cart() {
    return (
      <div className="cart">
        <div className="cart_details">
          <h2>Your cart:</h2>
          <p>Total items: {totalCartPrice().itemNum}</p>
          <p>Total:${totalCartPrice().price}</p>
        </div>
        <div className="cart_products">
          {cartProducts.map((el, index) => {
            return (
              <div key={index} className="cart_products--item">
                <img src={el.thumbnail} alt="" />

                <div className="item-details">
                  <Link to={"/Shop/" + el.id}>{el.title}</Link>
                  <p>$ {el.price}</p>
                  <div className="count">
                    <button onClick={() => { changeCount(-1, index)}}> - </button>
                    <p>{el.count}</p>
                    <button onClick={() => {changeCount(1, index)}}> + </button>
                  </div>

                  <button
                    onClick={() => {
                      dispatch({ type: "delete_item", payload: index });
                    }}
                  >
                    Delete Item
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="shop-cart-view">
      <Header title={"Shoping Cart"} />

      {cartProducts.length > 0 ? cart() : noItems()}
    </div>
  );
}

export default ShopCart;
