import React from 'react';
import FilmCardDetail from './FilmCardDetail';
import {Link} from 'react-router-dom'

const FilmCard = ({pizza, isPreview}) => {


const {id, title, description, url } = pizza

    return (

        

        <div className="col-md-6" key={`pizza-card-${id}`}>
                      <div className="card shadow my-2">
                          <div className="card-body">
                              <h4 className="card-title">{title}</h4>
                                
                                    
                                   
                                    
                                    <li class="list-group-item">{isPreview ? description.substring(0,100) : description}...</li>

                                    {/* Links to FilmDetail Page  */}
                                    <Link to={`/films/${id}`} className="btn btn-primary my-2"> Read Full Profile</Link>
                                   
                                   
                                    
                                
                          </div>
                      </div>
                  </div>
        
    );

};

export default FilmCard;

