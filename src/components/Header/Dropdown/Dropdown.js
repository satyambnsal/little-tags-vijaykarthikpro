import React, { useState } from "react";
import { ProfileItems } from "./MenuItems";
// import { LanguageItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Dropdown.scss";

export default function Dropdown(props) {
  const [click, setClick] = useState(false);
  // const [menuItems, setMenuItems] = useState([]);
  // if (props.type === "profile") {
  //   setMenuItems(ProfileItems);
  // } else if (props.type === "language") {
  //   setMenuItems(LanguageItems);
  // }
  const handleClick = () => setClick(!click);
  return (
    <div>
      <ul onClick={handleClick} className="dropdown-menu">
        {ProfileItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="dropdwon-link"
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
