import React, {useEffect, useState} from 'react';
import PeopleCardDetail from "../components/PeopleCardDetail";
import {useParams } from 'react-router-dom';

const PeopleDetail = () => {
    const {id} = useParams();

    const[people, setPeople] = useState([]);

    useEffect(() => {

        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json()) //parse to JSON
        .then(people => setPeople(people))  //map through people to create bootstrap card

    }, []); 


    return (

        <div>

            Welcome to People Detail**!
            {people.map((person) => (


                <>
                <PeopleCardDetail pokemon = {person} isPreview />
                </>


            ))}
        </div>
    );
};

export default PeopleDetail;