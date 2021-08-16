import React from 'react';
import {BrowserRouter, Switch, Route, useEffect} from 'react-router-dom';
import Films from './views/Films';
import People from './views/People';
import PeopleDetail from './views/PeopleDetail';
import FilmDetail from './views/FilmDetail';
import NotFound from './views/NotFound';
import Home from './views/Home';
import Navbar from "./components/Navbar";


const App = () => {

    

    return (
    
        <BrowserRouter>
            <div className="container">
                <Navbar/>
            
            <Switch>

    {/* Films component */}
                <Route exact path = "/films">
                <h1>Choose Your Adventure!</h1>
                    <Films />
                </Route>

                <Route exact path = "/films/:id">
                    <h1>Film Detail Page</h1>
                    <FilmDetail /> 
                    
                </Route>



   {/* People component */}
                <Route exact path = "/People">
                <h1>Meet The Heros!</h1>
                    <People />
                </Route>

                <Route exact path = "/People/:id">
                    <h1>People Detail Page</h1>
                    <PeopleDetail /> 
                </Route>
                    
            
                <Route exact path = "/">
                    <Home />
                </Route>
            
                <Route path = "*">
                    <h1 class="text-center m-5">🤦🏻‍♂️404 Not Found😭</h1>
                    <NotFound/>
                   
                </Route>
            
    
            </Switch>
        
            </div>
        </BrowserRouter>
    
    
    )
};
console.log(`Want to receive content from me on how to increase your email profits along with the unusual lessons I’ve learned from developing over $5 million worth of products and processes?\n\nGo to simoncheam.com and get your Funnel Repair Checklist so you can uncover hidden profits without doing more work.`)



export default App;

