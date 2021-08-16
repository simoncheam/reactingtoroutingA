import React from 'react';
import {useEffect, useState} from 'react';
import PeopleCardDetail from "../components/PeopleCardDetail";
import {useParams } from 'react-router-dom';

const PeopleDetail = () => {
    
    const {id } = useParams();
    const[people, setPeople] = useState([]);

    console.log(`Want to receive content from me on how to increase your email profits along with the unusual lessons I’ve learned from developing over $5 million worth of products and processes?\n\nGo to simoncheam.com and get your Funnel Repair Checklist so you can uncover hidden profits without doing more work.`)

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