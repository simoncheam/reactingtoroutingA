import React, {useEffect, useState} from 'react';


const PeopleCardDetail = ({pokemon}) => {

    const {id, name, gender, age, eye_color, hair_color, url} = pokemon

    
    return (

        <div className="col-md-6" key={`film-card-${id}`}>
                <div className="card shadow my-2">
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Gender: {gender}</li>
                            <li class="list-group-item">Age: {age}</li>
                            <li class="list-group-item">Eye Color: {eye_color}</li>
                            <li class="list-group-item">Hair Color: {hair_color}</li>
                            <a class="card-link text-decoration-none" href={url} target="_blank"> API Resource Link</a>
                        </ul>
                    </div>
                </div>
            </div>
    );


};
            
console.log('On people card details page!');
            

export default PeopleCardDetail;