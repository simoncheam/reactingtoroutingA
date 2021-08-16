import React from 'react';
import {BrowserRouter, Switch, Route, useEffect} from 'react-router-dom';
import Films from './views/Films';
import People from './views/People';
import PeopleDetail from './views/PeopleDetail';
import FilmDetail from './views/FilmDetail';

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
                <Route exact path = "/films">
                    <Films />
                </Route>

                <Route exact path = "/films/:id">
                    <h1>Film Detail Page</h1>
                    <FilmDetail /> 
                    
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

