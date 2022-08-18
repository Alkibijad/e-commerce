import { Routes, Route } from "react-router-dom";
import { createContext, useDebugValue, useEffect, useReducer } from "react";

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
    
      const productFounded = db.find((el) => el.id === action.payload)
      return [...cartProducts, productFounded]
     
      // if (productFounded) {
      //   productFounded.count++;
      //   return [...cartProducts];
      // } else {
      //   productFounded.count = 1;
      //   return [...cartProducts, productFounded];
      // }

    case "delete_item":
      const copyCartr = [...cartProducts];
      copyCartr.splice(action.payload, 1);
      return [...copyCartr];
    case "setCart":
      return [...action.payload]
  }
}

function reducerSelected(selectedProduct, action) {
  switch (action.type) { 
    case "set_selected_product":
      return {...selectedProduct}, db.find((el) => el.id === action.payload)
  }
 }


function App() {
  const [cartProducts, dispatch] = useReducer(reducer, []);
  const [selectedProduct, dispatchSelected] = useReducer(reducerSelected, {})



  return (
    <div className="App">
      <dataContext.Provider value={{ db, dispatch, dispatchSelected, selectedProduct, cartProducts }}>
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
