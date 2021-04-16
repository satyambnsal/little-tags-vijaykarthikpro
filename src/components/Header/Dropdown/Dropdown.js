import React, { useEffect, useState, /* useContext */ } from "react";
import { useSelector } from 'react-redux';
// import { removeAuthUser } from '../../../actions';
import { ProfileItems } from "./MenuItems";
import { LanguageItems } from "./MenuItems";
import { Link } from "react-router-dom";
/* import FirebaseContext from "../../Firebase/firebase";
import { removeFromLocalStorage } from '../../../Utils'; */
import '../Header.scss'


export default function Dropdown({ type }) {
  const [click, setClick] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const user = useSelector(state => state.sessionState.authUser);

/*   const dispatch = useDispatch();
  const firebase = useContext(FirebaseContext); */

  useEffect(()=>{
    if (type === "profile") {
      setMenuItems(ProfileItems);
    } else if (type === "language") {
      setMenuItems(LanguageItems);
    }
  },[type, user]);

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
    if(type === "profile") {
      const userMenu = menuItems.map((item, index) =>{
        return (<li key={index}>
              <Link
                className="dropdown-link"
                to={item.path}
                onClick={()=>setClick(!click)}
              >
                {item.title}
              </Link>
        </li>)
        });

        return (<div >
          <div className="profile-menu">
            <span className="hello">Hello </span>
            <span className="username">{user.name.split(' ')[0]}</span>
          </div>
          <div className="item-padding">
            {userMenu}
          </div>
         
        </div>)
    } else {
      const languageMenu =  menuItems.map((item, index) =>{
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

      return (<div className="item-padding">
        {languageMenu}
      </div>)
    }

  }


  return (
    <div >
      <ul className="dropdown-menu" >
        {displayDropDownList()}
      </ul>
    </div>
  );
}
