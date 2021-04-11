import React, { useEffect, useState } from "react";
import { ProfileItems } from "./MenuItems";
import { LanguageItems } from "./MenuItems";
import { Link } from "react-router-dom";
import '../Header.scss'


export default function Dropdown({ type }) {
  const [click, setClick] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(()=>{
    if (type === "profile") {
      setMenuItems(ProfileItems);
    } else if (type === "language") {
      setMenuItems(LanguageItems);
    }
  },[type]);

  const handleClick = () => setClick(!click);
  
  const displayDropDownList = () =>{
    return menuItems.map((item, index) =>{
        return (<li key={index}>
              <Link
                className="dropdown-link"
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
        </li>)
    })
  }


  return (
    <div >
      <ul className="dropdown-menu" onClick={handleClick} >
        {displayDropDownList()}
      </ul>
    </div>
  );
}
