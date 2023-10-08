import React, { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/Nav/nav'
import axios from 'axios'

function App() {
   
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
      
      <div className='App'>
         <Nav onSearch = {onSearch}></Nav>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
