import React from 'react';
import {useEffect, useState} from 'react';
import PeopleCardDetail from "../components/PeopleCardDetail";
import {useParams } from 'react-router-dom';

const PeopleDetail = () => {
    const {id, name } = useParams();
    const[people, setPeople] = useState([]);

    console.log(id);

    useEffect(() => {

        fetch(`'https://ghibliapi.herokuapp.com/people/${id}'`)
        .then(res => res.json()) //parse to JSON
        .then(people => setPeople(people))  //map through people to create bootstrap card

    }, []); 
    
   /// const { name, gender, age, eye_color, hair_color, url} = people
    console.log(id);
    return (
        
        
        <div>
            Welcome to People Detail for {id}
            
        <div>
        Name: {people.gender} 
        </div>       
            


                <>
                {/* <PeopleCardDetail pokemon = {people} isPreview /> */}
                <PeopleCardDetail pokemon = {people} isPreview/>
                </>
               


                <>
                <div className="col-md-6" key={`film-card-${id}`}>
                <div className="card shadow my-2">
                    <div className="card-body">
                        <h4 className="card-title">{people.name} WTF</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">FUCKING ID {id}</li>
                            <li class="list-group-item">FUCKING Name {name}</li>
                            {/* <li class="list-group-item">Age: {age}</li>
                            <li class="list-group-item">Eye Color: {eye_color}</li>
                            <li class="list-group-item">Hair Color: {hair_color}</li> */}
                            {/* <a class="card-link text-decoration-none" href={url} target="_blank"> API Resource Link</a> */}
                        </ul>
                    </div>
                </div>
            </div>

                </>


            {/* ))} */}
        </div>
        
        
    );
};

export default PeopleDetail;