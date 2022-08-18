import { Routes, Route } from "react-router-dom";
import { createContext, useReducer } from "react";

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
      let selectedProduct = action.payload;
      let cartProductIndex = null;
      let productFounded = cartProducts.find((el, index) => {
        cartProductIndex = index;
        return el.id === selectedProduct.id;
      });

      if (productFounded) {
        cartProducts[cartProductIndex].count++;
        return [...cartProducts];
      } else {
        selectedProduct.count = 1;
        return [...cartProducts, selectedProduct];
      }

    case "delete_item":
      const copyCartr = [...cartProducts];
      copyCartr.splice(action.payload, 1);
      return [...copyCartr];
    case "setCart":
      return [...action.payload];
    default:
      break;
  }
}

function reducerSelected(selectedProduct, action) {
  switch (action.type) {
    case "set_selected_product":
      let founded = db.find((el) => el.id === action.payload);
      return { ...selectedProduct, founded };
    default:
      break;
  }
}

function App() {
  const [cartProducts, dispatch] = useReducer(reducer, []);
  const [selectedProduct, dispatchSelected] = useReducer(reducerSelected, {});

  return (
    <div className="App">
      <dataContext.Provider
        value={{
          db,
          dispatch,
          dispatchSelected,
          selectedProduct,
          cartProducts,
        }}
      >
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
