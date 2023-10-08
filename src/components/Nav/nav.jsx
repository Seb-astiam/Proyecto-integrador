import React from "react";
import SearchBar from "../searchBar/SearchBar";

const Nav = ({onSearch}) => {
    return (
        <div> 
            <SearchBar 
            onSearch = {onSearch}
                //  onSearch={(characterID) => window.alert(characterID)}
                 />
        </div>
    )
}

export default Nav