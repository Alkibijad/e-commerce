
import { Link } from "react-router-dom";
import BtnAddToCart from "./BtnAddToCart";

function Product({ product }) {
  return (
    <div className="top-sellers_card">
      <p className="top-sellers_title">{product.title}</p>
      <img src={product.thumbnail} alt="" />
      <Link className="top-sellers_btn" to={"/Shop/" + product.id}>
        Read more
      </Link>
      <BtnAddToCart product={product} />
    </div>
  );
}

export default Product;
