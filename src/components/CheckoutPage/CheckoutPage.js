import React, { /* useEffect */ useState } from "react";
import { useSelector } from 'react-redux';
import './CheckoutPage.scss';
// import MenProtrait from '../../assets/images/men-portrait.svg'
import withAuthorization from '../Session/withAuthorization';

function CheckoutPage() {

  const cart = useSelector(state => state.cartState.cart);
  console.log(cart);
  const [quantityCount, setQuantityCount] = useState(1);
  const [totalItems/* , setTotalItems */] = useState(cart.length);
  const [totalPrice/* , setTotalPrice */] = useState(cart.reduce((acc, product)=>{
    return acc += product.price; 
  },0));

 /*  const removeItems = ()=>{
    setTotalItems(totalItems - 1);
    setTotalPrice(totalPrice - 100);
  } */

  const displayCartItems = () => {
    return cart.map((product)=>{
      const { id, title, price, image } = product
      return (
        <div className="item-row" key={id}>
        <div className="product-image">
          <img src={image} alt="product-img"/>
        </div>
        <div className="details-column">
          <div className="item-details">
              <div className="main-details">
                <span className="bold-title">{title}</span>
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
                <span className="bold-title">$ {price}</span>
              </div> 
            </div>
            <div className="buttons">
              <span className="wishlist-button">Move to Wishlist</span>
              <span className="remove-btn" /* onClick={removeItems()} */>Remove</span>
            </div>
          </div>
        </div>
      )

    })
    
  }

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
      {displayCartItems()}
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
