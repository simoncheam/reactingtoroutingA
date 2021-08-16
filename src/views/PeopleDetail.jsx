import React from 'react';
import {useEffect, useState} from 'react';
import PeopleCardDetail from "../components/PeopleCardDetail";
//import PeopleCard from "../components/PeopleCard";
import {useParams } from 'react-router-dom';

const PeopleDetail = () => {
    
    const {id } = useParams();
    const[people, setPeople] = useState([]);

    console.log(id);

    useEffect(() => {

        fetch(`https://ghibliapi.herokuapp.com/people/${id}`)
        .then(res => res.json()) //parse to JSON
        .then(people => setPeople(people))  //map through people to create bootstrap card

    }, []); 
    
   //const { name, gender, age, eye_color, hair_color, url} = people
    
    return (
        <div>
                <>
                <PeopleCardDetail /> 
                </>

          
        </div>
        
        
    );
};

export default PeopleDetail;