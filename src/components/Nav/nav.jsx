import React from "react";
import style from './nav.module.css'



const Nav = ({children}) => {
    return (
        <div className={style.Nav}> 
       {children}
        </div>
    )
}

export default Nav


