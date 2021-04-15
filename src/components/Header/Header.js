import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import AppLogo from "../../assets/icons/logo-symbol.png";
import SearchIcon from "../../assets/icons/search.svg";
import CartIcon from "../../assets/icons/cart.svg";
import GlobeIcon from "../../assets/icons/globe.svg";
import WishlistIcon from "../../assets/icons/wishlist.svg";
import ProfileIcon from "../../assets/icons/person.svg";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="left">
        <div>
          <Link to="/" className="left nav-links">
            <img src={AppLogo} alt="" />
            <span className="title">Style Beast</span>
          </Link>
        </div>
        <div>
          <Link to="/products/men" className="nav-links">
            Men
          </Link>
          <Link to="/products/women" className="nav-links">
            Women
          </Link>
          <Link to="/products/offers" className="nav-links">
            Offers
          </Link>
        </div>
      </div>
      <div className="right">
        <input type="text" id="filter" placeholder="Search items..." />
        <div className="nav-links">
          <img src={SearchIcon} alt="" />
        </div>
        <div className="menu-item">
          <Link to="/" className="nav-links">
            <img src={GlobeIcon} alt="" />
          </Link>
          <Dropdown type="language" />
        </div>
        <div className="menu-item">
          <Link to="/account" className="nav-links">
            <img src={ProfileIcon} alt="" />
          </Link>
          <Dropdown type="profile" />
        </div>
        <Link to="/" className="nav-links">
          <img src={WishlistIcon} alt="" />
        </Link>
        <Link to="/checkout" className="nav-links">
          <img src={CartIcon} alt="" />
        </Link>
      </div>
    </nav>
  );
}
