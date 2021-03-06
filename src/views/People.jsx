import React, {useEffect, useState} from 'react';
import PeopleCard from "../components/PeopleCard";
import {useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import PeopleCardDetail from '../components/PeopleCardDetail';

const People = () => {

    const[people, setPeople] = useState([]);
    const {id} = useParams();

    useEffect(() => {

        fetch(`https://ghibliapi.herokuapp.com/people`)
        .then(res => res.json()) //parse to JSON
        .then(people => setPeople(people))  //map through people to create bootstrap card

    }, []); 


    return (

        <div>

        
            {people.map(people => (

                    
                <>
                <PeopleCard pokemon = {people} isPreview /> 
            


                <li key ={`person-item-${people.name}`} className="list-group-item"></li>
                </>
        
                
                
                
            ))}

           

        </div>

       

    );
};

export default People;