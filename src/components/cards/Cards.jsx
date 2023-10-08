import React from 'react';
import Card from '../card/Card';
import style from './cards.module.css'

export default function Cards(props) {
   return <div className={style.grid}>
      {
         props.characters.map(personaje =>
            <Card
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin.name}
            image={personaje.image}
            onClose={props.onClose}
         />
         )
      }
   </div>;
}
