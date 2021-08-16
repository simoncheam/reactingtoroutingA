import React, {useEffect, useState} from 'react';
import FilmCard from "../components/FilmCard";
import {useParams } from 'react-router-dom';

const Films = () => {


 const[films, setFilms] = useState([]);
 const {id} = useParams();


    useEffect(() => {

        fetch(`https://ghibliapi.herokuapp.com/films`)
        .then(res => res.json()) //parse to JSON
        .then(films => setFilms(films))  //map through films to create bootstrap card

    }, []); 


    return (

        <div>
            Welcome to Films!
            {films.map(film => (
                <>

                {/* <h2 key = {`film-${index}`} className="display-2">{film.title}</h2> */}
                <FilmCard pizza = {film} isPreview/>   
                
                <li key ={`film-item-${film.title}`} className="list-group-item"></li>
                
                
                </>
            ))}
        </div>
    );
};

export default Films;