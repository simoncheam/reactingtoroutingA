import React from 'react';
import PeopleCardDetail from './PeopleCardDetail';
import {useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'

const PeopleCard = ({pokemon}) => {
    const {id, name, url} = pokemon
    
        return (
    
            
    
    <div className="col-md-6" key={`pokemon-card-${id}`}>
            <div className="card shadow my-2">
                <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                                  
              {/* <a class="card-link text-decoration-none text-right" href={< PeopleCardDetail/>} target="_blank"> Read Full Details Here</a> */}
                        <>
                         <Link to={`/People/${id}`} className="btn btn-primary"> Read Full Profile</Link>
                         </>
                                       
            </li>
                </div>
            </div>
            </div>
            
        );
    
    };
    
    export default PeopleCard;