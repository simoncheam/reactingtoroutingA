import React from 'react';
import {BrowserRouter, Switch, Route, useEffect} from 'react-router-dom';
import Films from './views/Films';
import People from './views/People';
import PeopleDetail from './views/PeopleDetail';

import Home from './views/Home';

import Navbar from "./components/Navbar";


const App = () => {

    


// Add useEffect
// useEffect(() => {


// }, []); 

    return (
    
        <BrowserRouter>
            <div className="container">
                <Navbar/>
            
            <Switch>

    {/* Films component */}
                <Route exact path = "/Films">
                    <Films />
                </Route>

   {/* People component */}
                <Route exact path = "/People">
                <h1>People Page</h1>
                    <People />
                </Route>

                <Route exact path = "/People/:id">
                    <h1>People Detail Page</h1>
                    <PeopleDetail /> 
                    
                </Route>
    
    
            <div>
            <Route exact path = "/Home">
                  

                </Route>
                <h1>Hello from App</h1>
                    <Home />


            </div>
            <Route path = "*">
                   
                    <h1>404 Not Found</h1>
                </Route>
    
            </Switch>
        
            </div>
        </BrowserRouter>
    
    );
};



export default App;

