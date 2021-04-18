import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext from "../Firebase/context";
import "./AccountPage.scss";
import Orders from "../OrdersPage/Orders";

export default function AccountPage() {
  const firebase = useContext(FirebaseContext);
  const handleLogout = () => {
    firebase.doSignOut();
  };

  return (
    <div className="account-main">
      <div className="account-aside">
        <Link to="/account/orders" className="nav-links">
          Orders
        </Link>
        <Link to="/account/address" className="nav-links">
          Address
        </Link>
        <Link to="/account/wishlist" className="nav-links">
          Wishlist
        </Link>
        <Link to="/home" className="nav-links" onClick={handleLogout}>
          Log Out
        </Link>
      </div>
      <div className="account-content">
        <Orders />
      </div>
    </div>
  );
}
