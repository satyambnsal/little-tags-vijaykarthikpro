import React, { /* useState */ } from "react";
import "./Card.scss";
import { Link, Switch, Route } from "react-router-dom";
// import WishlistIcon from "../../assets/icons/wishlist-black-border.svg";
// import WishlistFilledIcon from "../../assets/icons/wishlist-filled-black-img.svg";
import ProductDetailsPage from "../ProductDetailsPage/ProductDetailsPage";

export default function Card(props) {
/*   const [isWishlist, setWishlist] = useState(false);

  const wishlistIcon = () => {
    if (isWishlist) {
      return <img src={WishlistFilledIcon} alt="" />;
    } else {
      return <img src={WishlistIcon} alt="" />;
    }
  }; */

  const displayTitleText = (title) => {
    const words = title.split(" ");
    if (words.length > 4) {
      const letters = title.substring(0, 23);
      return <span className="title">{`${letters}...`}</span>;
    } else {
      return <span className="title">{title}</span>;
    }
  };

  const displayProducts = () => {
    return props.data.map((item) => {
      return (
        <div className="card" key={item.id}>
          <Link key={item.id} to={`/product-details/${item.id}`}>
            <div className="card-img">
              <img src={item.image} alt="" />
            </div>
          </Link>
          <div className="card-header">
            {displayTitleText(item.title)}
            <p className="price">
              <span>$</span>
              <span className="price-text">{item.price}</span>
            </p>
            {/* <button
              className="wishlist-btn"
              onClick={() => setWishlist(!isWishlist)}
            >
              {wishlistIcon()}
              <span className="wishlist-btn-text">Add to Wishlist</span>
            </button> */}
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div className="main-content">{displayProducts()}</div>
      <Switch>
        <Route path="/product-details/:id">
          <ProductDetailsPage />
        </Route>
      </Switch>
    </>
  );
}
