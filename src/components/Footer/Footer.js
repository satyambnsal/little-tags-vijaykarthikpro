import React from "react";
import "./Footer.scss";
import AppLogo from "../../assets/icons/logo-symbol.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="ft-logo">
        <img src={AppLogo} alt="" />
        <div className="ft-address">
          <span>Registered Office Address</span>
          <div className="top">
            <p>Style Beast</p>
            <p>Hyderbad, 500026</p>
            <p>India</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="ft-links">
          <span>Privacy Policy</span>
          <span>Use of terms</span>
        </div>
        <div>
          <span>&#169;2021 www.stylebeast.com All rights reserved</span>
        </div>
      </div>
    </div>
  );
}
