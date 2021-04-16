import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from "./components/Firebase/context";
import Firebase from "./components/Firebase/firebase";
import store from "./store";
import { Provider } from "react-redux";
require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
