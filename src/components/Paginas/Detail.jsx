import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import style from './Detail.module.css'

const Detail = ()=>{
    const {id} = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return (
        <div className={style.container}>
            <div>
            <h1 className={style.txt}>{character.name}</h1>
            <br/>
            <h2 className={style.txt}>{'Status: '+character.status}</h2>
            <h2 className={style.txt}>{'Specie: '+character.species}</h2>
            <h2 className={style.txt}>{'Sex: '+character.gender}</h2>
            <h2 className={style.txt}>{'Origin: '+character?.origin?.name}</h2>
            </div>
            
            <div>
             <img src={character.image} alt='' className={style.image}/>
            </div>
        </div>
    )
}

export default Detail;