import { useParams,  } from "react-router-dom";
import { useEffect, useState, useContext, useRef } from "react";
import Header from "./Header";
import { dataContext } from "../App";
import Product from "./Product";

function ProductDetails() {
  const { db, dispatch } = useContext(dataContext);

  let button = useRef();
  const thumbnail = useRef();
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [btnSwitch, setBtnSwitch] = useState(false);

  useEffect(() => {
    findProduct();
  }, []);
  
  function findProduct() {
    setSelectedProduct(db.find((el) => el.id === parseInt(id)));
  }
  
  function showAllImages() {
    return selectedProduct.images.map((el, index) => (
      <div key={index}>
        <img src={el} alt="image" onMouseOver={swipeThumbnail} />
      </div>
    ));
  }

  function swipeThumbnail(e) {
    thumbnail.current.src = e.target.src;
  }

  function btnEVO() {
    setBtnSwitch(true);
   
    dispatch({ type: "add_to_cart", payload: selectedProduct });
   


    setTimeout(() => {
      setBtnSwitch(false);
    }, 1000);
  }

  function displayProduct() {
    return (
      <div className="product-details">
        <div className="product-details_gallery">
          <img
            ref={thumbnail}
            src={selectedProduct.thumbnail}
            alt="product image"
          />
          <div className="image-gallery">{showAllImages()}</div>
        </div>
        <div className="product-details_info">
     
          <h2>{selectedProduct.title}</h2>

          <div className="product-table">
            <p>Price</p>
            <p>{selectedProduct.price}</p>
            <p>Category</p>
            <p>{selectedProduct.category}</p>
            <p>Brand</p>
            <p>{selectedProduct.brand}</p>
            <p>Rating</p>
            <p>{selectedProduct.rating}</p>
          </div>
          <p>{selectedProduct.description}</p>

          {!btnSwitch ? (
            <button onClick={ btnEVO }>Add To Cart</button>) : (
            <button>{selectedProduct.count} added</button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header title={selectedProduct.title} />

      {selectedProduct.id && displayProduct()}
    </div>
  );
}

export default ProductDetails;
