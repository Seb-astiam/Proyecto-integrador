import React from 'react';
import style from './card.module.css'

export default function Card(props) {
   const handleOnClose = ()=>{
      props.onClose(props.id.toString())
   }
   return (
      <div className={style.container}>
         <button onClick={handleOnClose}>X</button>
         <h2 className={style.txt}>{'Id: ' + props.id}</h2>
         <img src={props.image} alt='' className={style.image}/>
            <h2 className={style.txt}>{'Name: '+props.name}</h2>
            <h2 className={style.txt}>{'Status: '+props.status}</h2>
            <h2 className={style.txt}>{'Specie: '+props.species}</h2>
            <h2 className={style.txt}>{'Sex: '+props.gender}</h2>
            <h2 className={style.txt}>{'Origin: '+props.origin}</h2>
      </div>
   );
}
