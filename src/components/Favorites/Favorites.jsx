import React, { Component, useState } from 'react';
import './Favorites.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeAdd, removeAll } from '../../slices/favoritiesSlice';
import { useNavigate } from 'react-router-dom';


const Favorites =  ()=> {
    const favorities = useSelector(state => state.favorities.favorities);
    const dispacth = useDispatch()
    
    const navigate = useNavigate()

    const [inputstate,setInputState] = useState('');

    const [link, setLink] = useState();


    

    const saveList = async () => {
        try {
            const response = await fetch('https://acb-api.algoritmika.org/api/movies/list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: "Basliq",
                    movies: favorities?.map((item) =>{
                        return item.id
                    })
                })
            });

            if (!response.ok) {
                throw new Error('Failed to save the list');
            }

            const data = await response.json();
            setLink(data.id);
        } catch (error) {
            console.error('Error saving the list:', error);
        }
    };



   return ( <div className="favorites">
                <input 
                 value={inputstate}
                 onChange={(e) => {
                    return setInputState(e.target.value)
                 }}
                 className="favorites__name" />
               
                <ul className="favorites__list">
                    {favorities.map((item) => {
                        return  <div className='favorities_div' key={item.id}><li >{item.title} ({item.year})</li>
                         <button type="button" className="removebtn" onClick={ () => dispacth(removeAdd({id:item.id}))}>x</button>
                         </div>
                    })}
                <button type="button" className='removeall' onClick={ () => dispacth(removeAll())}>удалить все</button>
                </ul>
                <button type="button" className="favorites__save" onClick={saveList} >Сохранить список</button>

                {link && (
                <div className="favorites__link">   
                        <p onClick={() => navigate(`/list/${link}`)}>{inputstate}</p>
                </div>
            )}
            </div>
        );
}
 
export default Favorites;