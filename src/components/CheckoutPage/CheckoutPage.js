import React, { useState } from "react";
import './CheckoutPage.scss';
import MenProtrait from '../../assets/images/men-portrait.svg'
import withAuthorization from '../Session/withAuthorization';

function CheckoutPage() {
  const [quantityCount, setQuantityCount] = useState(1);
  const [totalItems/* , setTotalItems */] = useState(0);
  const [totalPrice/* , setTotalPrice */] = useState(2000);

 /*  const removeItems = ()=>{
    setTotalItems(totalItems - 1);
    setTotalPrice(totalPrice - 100);
  } */

  const increaseCount = () => {
    setQuantityCount(quantityCount + 1);
  };

  const decreaseCount = () => {
    const countValue = quantityCount < 2 ? 1 : quantityCount - 1;
    setQuantityCount(countValue);
  };


  return (<div className="checkout-container">
    <div className="cart-list">
      <h3 className="bold-title">My Shopping Bag ( {totalItems} items )</h3>
      <div className="item-row">
        <div className="product-image">
          <img src={MenProtrait} alt="item"/>
        </div>
        <div className="details-column">
          <div className="item-details">
            <div className="main-details">
              <span className="bold-title">Mens Casual Slim Fit</span>
              <span className="details-text">Size : XL</span>
              <span className="quantity-title details-text">Quantity :</span>
              <div className="quantity">
                <button className="decrease-button" onClick={decreaseCount}>
                  -
                </button>
                <span className="count-value">{quantityCount}</span>
                <button className="increase-button" onClick={increaseCount}>
                  +
                </button>
              </div>
            </div>
            <div className="price">
              <span className="bold-title">$ 100</span>
            </div> 
          </div>
          <div className="buttons">
            <span className="wishlist-button">Move to Wishlist</span>
            <span className="remove-btn" /* onClick={removeItems()} */>Remove</span>
          </div>
        </div>
      </div>
    </div>
    <div className="price-column">
      <h3 className="bold-title">Price Details ( {totalItems} items )</h3>
      <div>
        <div className="price-details">
          <div className="left bold-title">
            <span>TOTAL MRP</span>
            <span>DISCOUNT</span>
            <span>COUPON</span>
            <span>SHIPPING FEE</span>
            <span className="total-amount">TOTAL AMOUNT</span>
          </div>
          <div className="right">
            <span>$ {totalPrice}</span>
            <span>$ 500</span>
            <span>$ 0</span>
            <span>FREE</span>
            <span className="total-amount">$ {totalPrice}</span>
          </div>
        </div>
        <button>PLACE ORDER</button>
      </div>
    </div>
  </div>);
}

export default withAuthorization(CheckoutPage);
