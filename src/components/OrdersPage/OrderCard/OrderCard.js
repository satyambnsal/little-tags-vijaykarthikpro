import React from "react";
import "./OrderCard.scss";

export default function OrderCard({ ordersData }) {
  const displayOrder = () => {
    return ordersData.map((item) => {
      const { id, image, title, price, description } = item;
      return (
        <div className="card-main">
          <div className="card-top">
            <div>
              <span className="order-title">{title}</span>
              <p>Color-Black</p>
              <span className="order-title"> $ {price}</span>
              <div className="subtitle-size">
                Ordered -<span>1st Thu, 2021</span>
              </div>
              {/* <div className="subtitle-size">
                Delivered -<spann>10th Thu, 2021</spann>
              </div> */}
            </div>

            <div className="order-image">
              <img src={image} alt="order-card-img" />
            </div>
          </div>
          <div className="card-bottom">
            <div className="address-section">
              <span className="order-title">Address</span>
              <div className="address-content">
                <div>XYZ</div>
                <div>28, Camp, </div>
                <div>Pune, Maharshtra</div>
                <div>444602</div>
              </div>
            </div>
            <div className="price-section">
              <span className="order-title">Price details</span>
              <div className="price-details">
                <div className="price-title">
                  <li>List Price</li>
                  <li>Selling Price</li>
                  <li>Shiping Fee</li>
                  <li>Total amount</li>
                </div>
                <div className="price">
                  <li>$3000</li>
                  <li>$2000</li>
                  <li>Free</li>
                  <li>$2000</li>
                </div>
              </div>
              {/* <div className="order-price">
                <div className="price-list">
                  List Price-<span>$3000</span>
                </div>
                <div className="price-list">
                  Selling Price-<span>$2000</span>
                </div>
                <div className="price-list">
                  Shipping Fee-<span>Free</span>
                </div>
                <div className="price-list">
                  Total amount-<span>$2000</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      );
    });
  };
  return <div className="order-main">{displayOrder()}</div>;
}
