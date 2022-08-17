import { Routes, Route } from "react-router-dom";
import { createContext, useEffect, useReducer } from "react";

//Import components
import Navigation from "./components/Navigation";
import HomePage from "./components/pages/HomePage";
import ShopPage from "./components/pages/ShopPage";
import ContactPage from "./components/pages/ContactPage";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import ShopCart from "./components/ShopCart";

//import data
import db from "./db";

//import hooks
export const dataContext = createContext();

function reducer(cartProducts, action) {
  switch (action.type) {
    case "add_to_cart":
      const copyCart = [...cartProducts];
      let productIndex = null;
      const productFounded = cartProducts.find((el, index) => {
        productIndex = index;
        return el.id === action.payload.id;
      });

      if (productFounded) {
        copyCart[productIndex].count++;
        return copyCart;
      } else {
        action.payload.count = 1;
        return [...cartProducts, action.payload];
      }
    case "delete_item":
      const copyCartr = [...cartProducts];
      copyCartr.splice(action.payload, 1);
      return [...copyCartr];//spread operator
    case "setCart":
      return [...action.payload]
  }
}

function App() {
  const [cartProducts, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  return (
    <div className="App">
      <dataContext.Provider value={{ db, dispatch, cartProducts }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Shop" element={<ShopPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Shop/:id" element={<ProductDetails />} />
          <Route path="/Shop-Cart" element={<ShopCart />} />
        </Routes>
      </dataContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
