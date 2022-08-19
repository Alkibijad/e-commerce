import { useParams } from "react-router-dom";
import { dataContext } from "../App";
import { useEffect, useContext, useRef } from "react";
import Header from "./Header";
import BtnAddToCart from "./BtnAddToCart";


function ProductDetails() {
  const {dispatchSelected, selectedProduct} = useContext(dataContext);
  const thumbnail = useRef();
  const { id } = useParams()
  
  

  useEffect(() => { 
    findProduct()
  })

  function findProduct() {
 
    dispatchSelected({
      type: "set_selected_product",
      payload: parseInt(id),
    });
  }

  function showAllImages() {
    return selectedProduct.images.map((el, index) => (
      <div key={index}>
        <img src={el} alt="" onMouseOver={swipeThumbnail} />
      </div>
    ));
  }

  function swipeThumbnail(e) {
    thumbnail.current.src = e.target.src;
  }

  function displayProduct() {
    return (
      <div className="product-details">
        <div className="product-details_gallery">
          <img
            ref={thumbnail}
            src={selectedProduct.thumbnail}
            alt=""
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
          <BtnAddToCart id={selectedProduct.id} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header title={selectedProduct.title} />
      {selectedProduct.id ? displayProduct() : null}
    </div>
  );
}

export default ProductDetails;
