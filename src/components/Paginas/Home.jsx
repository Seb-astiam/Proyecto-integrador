import React, { useState } from "react";
import axios from 'axios'
import Cards from '../cards/Cards';
import SearchBar from "../searchBar/SearchBar";
 
const Home = () => {
    const [characters, setCharacters] = useState([]);

    const onSearch = (id) => {
       try {
          axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
             if (data.name) {
                setCharacters((oldChars) => [...oldChars, data]);
             } else {
                window.alert('¡No hay personajes con este ID!');
             }
          });
       } catch (error) {
            console.error(error);
       }
    };

    const onClose = (id)=>{
          const characterId = parseInt(id);
          const updatedCharacters = characters.filter((character) => character.id !== characterId);
    
          setCharacters(updatedCharacters);
}
    
    return (
        <div>
        <SearchBar onSearch = {onSearch} />
        <Cards characters={characters} onClose={onClose} />
        </div>
    )
}

export default Home

 
