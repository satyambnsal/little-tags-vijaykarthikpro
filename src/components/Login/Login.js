import React from "react";
import AppLogo from "../../assets/icons/logo-symbol@2x.png";
import FbIcon from "../../assets/icons/fb-logo.svg";
import GoogleIcon from "../../assets/icons/google-logo.svg";
import "./Login.scss";

export default function Login() {
  return (
    <div className="outer">
      <img src={AppLogo} alt="" />
      Welcome to Style Beast
      <div className="inner">
        <img src={GoogleIcon} alt="" />
        <span>Sign Up with Google</span>
      </div>
      <div className="inner">
        <img src={FbIcon} alt="" />
        <span>Continue with Facebook</span>
      </div>
    </div>
  );
}
