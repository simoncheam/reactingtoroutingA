import React, {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';


const FilmCardDetail = () => {

    //const { name, gender, age, eye_color, hair_color, url} = people
       
   
      const {id} = useParams();
      const[film, setFilm] = useState([]);
      
      useEffect(() => {

        fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then(res => res.json()) //parse to JSON
        .then(film => setFilm(film))  //map through people to create bootstrap card

    }, []); 

       const { title, description, director, producer, release_date, rt_score, url} = film
       
   
   
       return (
          
          
          
           
           <div className="col-md-6" key={`film-card-${id}`}>
                   <div className="card shadow my-2">
                       <div className="card-body">
                           <h4 className="card-title">{title}</h4>
   
                           
   
                           <ul class="list-group list-group-flush">
                               <li class="list-group-item">{description}</li>
                               <li class="list-group-item">Director: {director}</li>
                               <li class="list-group-item">Producer: {producer}</li>
                               <li class="list-group-item">Release Date: {release_date}</li>
                               {/* How do I omnit the text warning/success marker? */}
                               <li  class="list-group-item" className={film?.rt_score > 50 ? "text-success" : "text-warning" }>RT Score: {rt_score}</li>
                               <a class="card-link text-decoration-none" href={url} target="_blank"> API Resource Link</a>
                           </ul>
                       </div>
                   </div>
               </div>
       );
   
   
   };
               
   
   
   export default FilmCardDetail;