import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {

    // NavLink allows activeClassName features
    
    return ( 
        <div className="bg-dark d-flex justify-content-center">
            
                <NavLink  to ="/" exact activeClassName="btn-info text-white" className="btn btn-outline-info m-2"> 
                Home 
                </NavLink>
                
                <NavLink to ="/films" exact activeClassName="btn-info text-white" className="btn btn-outline-info m-2" > 
                Films 
                </NavLink> 
                
                <NavLink to ="/people" exact activeClassName="btn-info text-white" className="btn btn-outline-info m-2" > 
                People 
                </NavLink>
            </div>
    );
};

export default Navbar;