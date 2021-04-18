import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SIZES } from "../../Utils";
import "./ProductDetailsPage.scss";
import ProductDetailsImg from "../../assets/images/product-details-img.svg";
import CartIcon from "../../assets/icons/cart-filled.svg";
import WishlistIcon from "../../assets/icons/wishlist-filled.svg";
import Products from "../../data/products";
// import Carousel from '../carousel/Carousel'
// import SimilarProducts from "../SimilarProducts/SimilarProducts";

export default function ProductDetailsPage() {
  const [quantityCount, setQuantityCount] = useState(1);
  const [product, setProduct] = useState({});
  let location = useLocation();
  let id = location.pathname.split("/")[2];

  useEffect(() => {
    Products.filter((product) => {
      if (product.id.toString() === id) {
        console.log("product: ", product);
        setProduct(product);
      }
      return null;
    });
  }, [id]);

  const displaySizes = () => {
    const sizesList = Object.values(SIZES);
    return sizesList.map((size, id) => {
      return (
        <span key={id} className="size">
          {size}
        </span>
      );
    });
  };

  const increaseCount = () => {
    setQuantityCount(quantityCount + 1);
  };

  const decreaseCount = () => {
    const countValue = quantityCount < 2 ? 1 : quantityCount - 1;
    setQuantityCount(countValue);
  };

  return (
    <div className="product-details-container">
      <div className="details">
        <div className="image-carousel">
          <img
            src={product.image ? product.image : ProductDetailsImg}
            alt="products"
          />
        </div>
        <div className="description">
          <h2 className="title">{product.title ? product.title : "Jacket"}</h2>
          <h3>
            Price : <span className="price-text">$</span>
            <span className="price-text">{product.price}</span>
          </h3>
          <p className="description-text">{product.description}</p>
          <h3 className="size-title">Size</h3>
          <div className="sizes-list">{displaySizes()}</div>
          <h3 className="quantity-title">Quantity</h3>
          <div className="quantity">
            <button className="decrease-button" onClick={decreaseCount}>
              -
            </button>
            <span className="count-value">{quantityCount}</span>
            <button className="increase-button" onClick={increaseCount}>
              +
            </button>
          </div>
          <div className="add-to-buttons">
            <button className="cart">
              <img src={CartIcon} alt="cart-icon" />
              <span className="cart-btn-text">Add to Cart</span>
            </button>
            <button className="wishlist">
              <img src={WishlistIcon} alt="wishlist-icon" />
              <span className="wishlist-btn-text">Add to Wishlist</span>
            </button>
          </div>
        </div>
      </div>
      {/* <Carousel /> */}
      {/* <SimilarProducts /> */}
    </div>
  );
}
