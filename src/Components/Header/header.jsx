import React from "react";

import "./header.css"

const Header = ({setSearchInput}) => {

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value)
    }

    return<>
    <header className="header">
        <div className="container__brand">
          <img src="../../img/Gshop-logo.png" alt="Gshop logo" className="logo" />
        </div>
        <div className="search__container">
            <div className="input__container">
                <input 
                    type="text" 
                    name="search"  
                    className="search__input" 
                    placeholder="Buscar por categoria..."
                    onChange={handleSearchInputChange}    
                />
                <a href="#products"><img src="../../img/search-icon.png" alt="Search" className="search-icon" /></a>
            </div>
        </div>
        <div className="user-info__container">
            <div className="user-img__container">
                <img src="../../img/user.png" alt="User" className="user__img" />
            </div>
            <div className="user__info">
                <h3 className="userName">Someone</h3>
                <span className="userEmail">someone@example.com</span>
            </div>
        </div>
      </header>
    </>
}

export default Header