import React from "react";
import './HomePage.scss'
import { Link } from "react-router-dom";
// import Routes from '../../constants/routes'
import HomeBanner from '../../assets/images/home-page-banner.svg'
import MenPortrait from '../../assets/images/men-portrait.svg'
import WomenPortrait from '../../assets/images/women-portrait.svg'
import JacketsImg from '../../assets/images/jackets.svg'
import TshirtsImg from '../../assets/images/tshirts.svg'
import ElectronicsImg from '../../assets/images/electronics.svg'
import JeweleryImg from '../../assets/images/jewelery.svg'

export default function HomePage() {
  return (<div className="home-container">
    <div className="banner-section">
      <img className="banner" src={HomeBanner} alt="img"/>
    </div>
    <div className="section-1">
      <h1>COLLECTIONS</h1>
      <div className="collections">
      <Link to="/product-details" className="nav-links">
        <div className="men">
          <h2>MEN</h2>
          <img src={MenPortrait} alt="img"/>
        </div>
        </Link>
        <p>"Fashion changes, but<br/>style endures"</p>
        <Link to="/product-details" className="nav-links">
        <div className="women">
          <h2>WOMEN</h2>
          <img src={WomenPortrait} alt="img"/>
        </div> 
        </Link>
      </div>
    </div>
    <div className="section-2">
      <h1>CATEGORIES TO BAG</h1>
      <div className="categories-to-add">
        <Link to="/product-details" className="nav-links">
        <div>
          <img src={JacketsImg} alt="img"/>
          <h2>Jackets</h2>
        </div>
        </Link>
        <Link to="/product-details" className="nav-links">
        <div>
          <img src={TshirtsImg} alt="img"/>
          <h2>T-shirts</h2>
        </div>
        </Link>
        <Link to="/product-details" className="nav-links">
        <div>
          <img src={ElectronicsImg} alt="img"/>
          <h2>Electronics</h2>
        </div>
        </Link>
        <Link to="/product-details" className="nav-links">
        <div>
          <img src={JeweleryImg} alt="img"/>
          <h2>Jewelery</h2>
        </div>
        </Link>
      </div>
    </div>
    </div>);
}
