import React, { useState } from "react";
import "./Card.scss";
import WishlistIcon from "../../assets/icons/wishlist-black-border.svg";
import WishlistFilledIcon from "../../assets/icons/wishlist-filled-black-img.svg";

export default function Card(props) {
  const [isWishlist, setWishlist] = useState(false);

  const wishlistIcon = () => {
    if (isWishlist) {
      return <img src={WishlistFilledIcon} alt="" />;
    } else {
      return <img src={WishlistIcon} alt="" />;
    }
  };

  const displayTitleText = (title) => {
    const words = title.split(" ");
    if (words.length > 4) {
      const letters = title.substring(0, 23);
      return <span className="title">{`${letters}...`}</span>;
    } else {
      return <span className="title">{title}</span>;
    }
  };

  return (
    <div className="main-content">
      {props.data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card-img">
              <img src={item.image} alt="" />
            </div>
            <div className="card-header">
              {displayTitleText(item.title)}
              <p className="price">
                <span>&#8377;</span>
                <span className="price-text">{item.price}</span>
              </p>
              <button
                className="wishlist"
                onClick={() => setWishlist(!isWishlist)}
              >
                {wishlistIcon()}
                <span className="wishlist-btn-text">Add to Wishlist</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
