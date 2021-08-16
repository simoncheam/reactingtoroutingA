import React, {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';


const PeopleCardDetail = () => {

 
    

   const {id} = useParams();
    
   
   const[people, setPeople] = useState([]);
   
   
   
   useEffect(() => {
       
       fetch(`https://ghibliapi.herokuapp.com/people/${id}`)
       .then(res => res.json()) //parse to JSON
       .then(people => setPeople(people))  //map through people to create bootstrap card
       
    }, [id]); 
    const { name, gender, age, eye_color, hair_color, url} = people
    


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
            


export default PeopleCardDetail;