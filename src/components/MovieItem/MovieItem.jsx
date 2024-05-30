import React from 'react';
import './MovieItem.css';
import { useDispatch } from 'react-redux';
import { addList } from '../../slices/favoritiesSlice';


const MovieItem = ({data})=> {
        const dispacth = useDispatch();
        const handleAddToList = () =>{
            dispacth(addList({title:data.Title,year:data.Year,poster:data.Poster,id:data.imdbID}))
        } 

        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={data?.Poster} alt={data?.Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{data?.Title}&nbsp;({data?.Year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={handleAddToList}>Добавить в список</button>
                </div>
            </article>
        );
}

export default MovieItem;