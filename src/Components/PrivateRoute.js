import React from 'react'
import {Navigate} from 'react-router-dom';


export default function PrivateRoute({isLoggedIn , children}) {

    // IF LOGIN THEN GO TO CHILDERN (DASHBOARD)
    if(isLoggedIn)
    {
        return children ; 
    }

    // GO TO LOG IN PAGE
    else
    {
        return <Navigate to="/login"  />
    }
}
