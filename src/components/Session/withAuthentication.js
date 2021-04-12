/* import React, { useContext, useEffect } from 'react';
import FirebaseContext from '../Firebase/context'

const withAuthentication = (Component) =>{
    const newComponent = (props) =>{
        const firebase = useContext(FirebaseContext);

        const saveToLocalStorage = (authUser) =>{
            localStorage.setItem('authUser', JSON.stringify(authUser));
        }
        useEffect(()=>{
            firebase.onAuthChangeListener(saveToLocalStorage);
        },[]);

        return <Component {...props} />
    }

    return newComponent;
}

export default withAuthentication; */