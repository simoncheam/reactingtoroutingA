import React, {useEffect, useState} from 'react';
import FilmCard from "../components/FilmCard";

const Films = () => {


 const[films, setFilms] = useState([]);


    useEffect(() => {

        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json()) //parse to JSON
        .then(films => setFilms(films))  //map through films to create bootstrap card

    }, []); 


    return (

        <div>
            Welcome to Films!
            {films.map((film, index) => (
                <>
                {/* <h2 key = {`film-${index}`} className="display-2">{film.title}</h2> */}
                <FilmCard pizza = {film} isPreview/>   
                </>
            ))}
        </div>
    );
};

export default Films;