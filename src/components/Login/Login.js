import React, { useState, useContext } from "react";
import AppLogo from "../../assets/icons/logo-symbol.png";
import FbIcon from "../../assets/icons/fb-logo.svg";
import GoogleIcon from "../../assets/icons/google-logo.svg";
import FirebaseContext from "../Firebase/context";
import CrossIcon from "../../assets/icons/clear.svg";
import { saveToLocalStorage } from "../../Utils";
import { setAuthUser } from "../../actions";
import "./Login.scss";

export default function Login({ showLogin, handleModalOpen }) {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        const userDetails = {
          email: authUser.email,
          name: authUser.displayName,
          emailVerified: authUser.emailVerified,
        };

        saveToLocalStorage("authUser", userDetails);
        setAuthUser(userDetails);

        handleModalOpen();

        return firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          displayName: authUser.user.displayName,
          roles: {},
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  const handleFacebookSignIn = () => {
    firebase
      .doFacebookSignIn()
      .then((authUser) => {
        console.log("Facebook auth", authUser);
        const userDetails = {
          email: authUser.email,
          name: authUser.displayName,
          emailVerified: authUser.emailVerified,
        };

        saveToLocalStorage("authUser", userDetails);
        setAuthUser(userDetails);

        handleModalOpen();

        return firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          displayName: authUser.user.displayName,
          roles: {},
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

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

            {!errorMessage ? (
              <div className="login-options">
                <div className="box">
                  <button className="google-login" onClick={handleGoogleSignIn}>
                    <img
                      className="google-img"
                      src={GoogleIcon}
                      alt="google-icon"
                    />
                    <span>Continue with Google</span>
                  </button>
                  <button
                    className="facebook-login"
                    onClick={handleFacebookSignIn}
                  >
                    <img src={FbIcon} alt="fb-icon" className="fb-img" />
                    <span>Continue with Facebook</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="box">
                <p>{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
