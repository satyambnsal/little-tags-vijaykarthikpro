import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import AppLogo from "../../assets/icons/logo.svg";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const onMouseHover = () => {
    setDropdown(true);
  };
  const onMouseLeave = () => {
    setDropdown(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={AppLogo} alt="" width="50px" height="50px" />
        <span className="title">StyleBeast</span>
      </div>

      <ul className="nav-category">
        <li className="nav-item">
          <Link to="/" className="nav-links">
            Men
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-links">
            Women
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-links">
            Offers
          </Link>
        </li>
      </ul>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-links">
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-links">
            Language Support
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseHover}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/" className="nav-links">
            Profile
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-links">
            Wishlist
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-links">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}
