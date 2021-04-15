import React from "react";
import AppLogo from "../../assets/icons/logo-symbol.png";
import FbIcon from "../../assets/icons/fb-logo.svg";
import GoogleIcon from "../../assets/icons/google-logo.svg";
import CrossIcon from "../../assets/icons/clear.svg";
import "./Login.scss";

export default function Login({ showLogin, handleModalOpen }) {
  return (
    <>
      {showLogin ? (
        <div className="modal">
          <div className="outer">
            <div className="top-section">
              <div className="logo-item">
                <img src={AppLogo} alt="logo-img" />
                <span className="title">Style Beast</span>
              </div>
              <img
                src={CrossIcon}
                alt="cancel-icon"
                onClick={handleModalOpen}
                className="close-modal"
              />
            </div>

            <div className="login-options">
              <div className="box">
                <button className="google-login">
                  <img
                    className="google-img"
                    src={GoogleIcon}
                    alt="google-icon"
                  />
                  <span>Continue with Google</span>
                </button>
                <button className="facebook-login">
                  <img src={FbIcon} alt="fb-icon" className="fb-img" />
                  <span>Continue with Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
