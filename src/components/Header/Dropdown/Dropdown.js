import React, { useEffect, useState, /* useContext */ } from "react";
/* import { useDispatch } from 'react-redux';
import { removeAuthUser } from '../../../actions'; */
import { ProfileItems } from "./MenuItems";
import { LanguageItems } from "./MenuItems";
import { Link } from "react-router-dom";
/* import FirebaseContext from "../../Firebase/firebase";
import { removeFromLocalStorage } from '../../../Utils'; */
import '../Header.scss'


export default function Dropdown({ type }) {
  const [click, setClick] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
/*   const dispatch = useDispatch();
  const firebase = useContext(FirebaseContext); */

  useEffect(()=>{
    if (type === "profile") {
      setMenuItems(ProfileItems);
    } else if (type === "language") {
      setMenuItems(LanguageItems);
    }
  },[type]);

  /* const handleClick = (item) => {
    console.log("item in handleClick:",item);
    if(item === "logout") {

      // alert("Are you sure you want to logout?");

      firebase.doSignOut().then((response)=>{

        console.log(response);
        removeFromLocalStorage('authUser');
        dispatch(removeAuthUser());

      }).catch(error=>{
        console.log(error);
        alert(error);
      })
    } else {
      setClick(!click);
    }
  }; */
  
  const displayDropDownList = () =>{

    return menuItems.map((item, index) =>{
        return (<li key={index}>
              <Link
                className="dropdown-link"
                to={item.path}
                onClick={()=>setClick(!click)}
              >
                {item.title}
              </Link>
        </li>)
    })
  }


  return (
    <div >
      <ul className="dropdown-menu" >
        {displayDropDownList()}
      </ul>
    </div>
  );
}
