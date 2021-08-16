import React from 'react';
import {useEffect, useState} from 'react';
import FilmCardDetail from "../components/FilmCardDetail";
import {useParams } from 'react-router-dom';



const FilmDetail = () => {
    
    const {id } = useParams();
    const[film, setFilm] = useState([]);

    

    useEffect(() => {

        fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then(res => res.json()) //parse to JSON
        .then(film => setFilm(film))  //map through people to create bootstrap card

    }, []); 
    
   //const { name, gender, age, eye_color, hair_color, url} = people
    
       
        console.log(id)
       

    return (

        <div>
                <>
                <FilmCardDetail /> 
                </>

          
        </div>
        
        
    );
};

export default FilmDetail;