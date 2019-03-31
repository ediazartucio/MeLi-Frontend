import React from 'react';
import logo from '.././common/assets/Logo_ML@2x.png.png.png';
import searchIcon from '.././common/assets/ic_Search@2x.png.png.png';
import './Search.css';

const Search = props => {
    return(
        <div className="searchbar-container">
            <img className="searchbar-logo" src={logo} alt="logo-meli" />
            <input type="text" className="searchbar-input" placeholder="Nunca dejes de buscar" />
            <button className="search-button">
                <img className="button-search-icon" src={searchIcon} alt="search-icon"/>
            </button>
        </div>
    );
}

export default Search;