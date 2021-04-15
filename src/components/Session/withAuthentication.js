import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import { setAuthUser } from "../../actions";
import FirebaseContext from "../Firebase/context";
import {saveToLocalStorage, removeFromLocalStorage} from '../../Utils';

const withAuthentication = (Component) => {
  const NewComponent = (props) => {
    const firebase = useContext(FirebaseContext);
    
    const next = (authUser) => {
      const userDetails = {
        email: authUser.email, 
        name: authUser.displayName, 
        emailVerified: authUser.emailVerified  
      }
      saveToLocalStorage('authUser',userDetails);
      props.setAuthUser(userDetails);
    };

    const fallback = () => {
      removeFromLocalStorage('authUser')
      props.setAuthUser(null);
    };
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("authUser"));
      props.setAuthUser(user);
      firebase.onAuthChangeListener(next, fallback);
    }, []);

    return <Component {...props} />;
  };

  return connect(null, { setAuthUser })(NewComponent);
};

export default withAuthentication;
