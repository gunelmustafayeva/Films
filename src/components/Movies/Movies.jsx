import React, { Component, useEffect, useState } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

const Movies = ({search})=> {

    const [state,setState] = useState();

       useEffect(() =>{
        fetch(`https://www.omdbapi.com/?apikey=b94b702d&s=${search||'godfather'}`)
        .then((response) => response.json())
        .then((data) => {
          setState(data.Search);
          console.log(data.Search);
      });
     },[search]);


        return ( 
            <ul className="movies">
                {state?.map((state) => (
                    <li className="movies__item" key={state.imdbID}>
                        <MovieItem data={state} />
                    </li>
                ))}
            </ul>
        );
    
}
 
export default Movies;
