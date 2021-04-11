import React from "react";
import "./Card.scss";

export default function Card(props) {
  return (
    <div className="main_content">
      {props.data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card_img">
              <img src={item.image} alt="" />
            </div>
            <div className="card_header">
              <h2>{item.title}</h2>
              <p className="price">
                <span>&#8377;</span>
                {item.price}
              </p>
              <div className="btn">Add to wishlist</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
