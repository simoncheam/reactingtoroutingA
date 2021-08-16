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
    
       
   console.log(`Want to receive content from me on how to increase your email profits along with the unusual lessons I’ve learned from developing over $5 million worth of products and processes?\n\nGo to simoncheam.com and get your Funnel Repair Checklist so you can uncover hidden profits without doing more work.`)
       

    return (

        <div>
                <>
                <FilmCardDetail /> 
                </>

          
        </div>
        
        
    );
};

export default FilmDetail;