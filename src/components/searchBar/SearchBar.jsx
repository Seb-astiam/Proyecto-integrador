import React, { useState } from 'react';

export default function SearchBar(props) {
   const [id, setId] = useState ('')
   const { onSearch } = props;
   const handleChange = (e)=> {
      setId(e.target.value);
   }
   return (
      <div style={{
         height: 80,
         display: 'flex',
         justifyContent: 'end',
         alignItems: 'center',
         width: '100%',
      }}>
         <input 
         style={{
            height: 40,
            borderRadius: 10,
            width: 250,
            marginRight: 20,
         }}
         value = {id}
         onChange={handleChange}
         type='search' />
         <button onClick={()=>onSearch(id)}
         style={{
            height: 40,
            width: 100,
            borderRadius: 10,
            marginRight: 30,
         }}
         >Agregar</button> 
      </div>
   );
}
