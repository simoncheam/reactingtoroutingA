import React from 'react';
import { useLocation } from "react-router-dom"

const NotFound = () => {

   const location = useLocation();

    return ( //<h1 className="display-1 text-danger"> Page not found!</h1>

    <div id="wrapper" class="text-center">
        <h3> ❌ This page {location.pathname} could not be found ❌ </h3>
            <img src="https://i.imgur.com/qIufhof.png" />
            
            
        </div >
 
    

    )};

export default NotFound;