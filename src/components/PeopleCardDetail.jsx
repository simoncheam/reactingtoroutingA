import React, {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';


const PeopleCardDetail = ({pokemon}) => {

   const { name, gender, age, eye_color, hair_color, url} = pokemon
    
   
 //  const {id, name, gender, age, eye_color, hair_color, url} = useParams();

   const {id} = useParams();
    
   
   
   
   
   useEffect(() => {
       
       fetch(`'https://ghibliapi.herokuapp.com/people/${id}'`)
       .then(res => res.json()) //parse to JSON
       .then(people => setPeople(people))  //map through people to create bootstrap card
       
    }, []); 
    
    const[people, setPeople] = useState(null);


    return (
       
       
       
        
        <div className="col-md-6" key={`film-card-${id}`}>
                <div className="card shadow my-2">
                    <div className="card-body">
                        <h4 className="card-title">Inside PeopleCardDetail</h4>
                        <h4 className="card-title">FUCKING ID:{id}</h4>

                        <div>{pokemon}</div>

                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Gender: {id.gender}</li>
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