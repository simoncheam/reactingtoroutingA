import React from 'react';

const FilmCard = ({pizza, isPreview}) => {
const {id, title, producer, director, release_date, description, url } = pizza

    return (

        

        <div className="col-md-6" key={`pizza-card-${id}`}>
                      <div className="card shadow my-2">
                          <div className="card-body">
                              <h4 className="card-title">{title}</h4>
                                <ul class="list-group list-group-flush">
                                    
                                    {/* <li class="list-group-item">Produced By: {producer}</li>
                                    <li class="list-group-item">Directed By: {director}</li>
                                    <li class="list-group-item">Released in: {release_date}</li> */}
                                    
                                    <li class="list-group-item">{isPreview ? description.substring(0,100) : description}...</li>
                                    <a class="card-link text-decoration-none text-right" href={url} target="_blank"> Read Full Details Here</a>
                                    <a class="card-link text-decoration-none" href={url} target="_blank"> API Resource Link</a>
                                </ul>
                          </div>
                      </div>
                  </div>
        
    );

};

export default FilmCard;

/// isPreview ? description (0,100) : description