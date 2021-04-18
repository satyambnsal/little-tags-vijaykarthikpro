import React, { useEffect, useState, useContext } from "react";
import FirebaseContext from "../../Firebase/context";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProfileItems } from "./MenuItems";
import { LanguageItems } from "./MenuItems";
import "../Header.scss";

export default function Dropdown({ type }) {
  const [click, setClick] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const user = useSelector((state) => state.sessionState.authUser);

  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    if (type === "profile") {
      setMenuItems(ProfileItems);
    } else if (type === "language") {
      setMenuItems(LanguageItems);
    }
  }, [type, user]);

  const handleLogout = () => {
    firebase.doSignOut();
  };

  const displayDropDownList = () => {
    if (type === "profile") {
      const userMenu = menuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className="dropdown-link"
              to={item.path}
              onClick={() => setClick(!click)}
            >
              {item.title}
            </Link>
          </li>
        );
      });

      return (
        <div>
          <div className="profile-menu">
            <span className="hello">Hello </span>
            <span className="username">{user.name.split(" ")[0]}</span>
          </div>
          <div className="item-padding">
            {userMenu}
            <div className="logout" onClick={handleLogout}>
              Logout
            </div>
          </div>
        </div>
      );
    } else {
      const languageMenu = menuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className="dropdown-link"
              to={item.path}
              onClick={() => setClick(!click)}
            >
              {item.title}
            </Link>
          </li>
        );
      });

      return <div className="item-padding">{languageMenu}</div>;
    }
  };

  return (
    <div>
      <ul className="dropdown-menu">{displayDropDownList()}</ul>
    </div>
  );
}

Dropdown.propTypes = {
  type: PropTypes.string,
};

Dropdown.defaultProps = {
  type: "",
};
