import React, { useState, useContext } from "react";
import AppLogo from "../../assets/icons/logo-symbol@2x.png";
import FbIcon from "../../assets/icons/fb-logo.svg";
import GoogleIcon from "../../assets/icons/google-logo.svg";
import FirebaseContext from "../Firebase/context";
import * as ROUTES from "../../constants/routes";
import "./Login.scss";

export default function Login(props) {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        return firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
      })
      .then(() => {
        props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        alert(errorMessage);
      });
  };

  return (
    <div className="outer">
      <img src={AppLogo} alt="" />
      Welcome to Style Beast
      <div className="inner" onClick={handleGoogleSignIn}>
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
