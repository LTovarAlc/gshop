import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ setSearchInput }) => {

  const location = useLocation();

  if(location.pathname === '/Register'){
    return null
  }

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <header className="header">
        <Link to={"/"}>
          <div className="container__brand">
            <img
              src="../../img/Gshop-logo.png"
              alt="Gshop logo"
              className="logo"
            />
          </div>
        </Link>
        <div className="search__container">
          <div className="input__container-search">
            <input
              type="text"
              name="search"
              className="search__input"
              placeholder="Buscar por categoria..."
              onChange={handleSearchInputChange}
            />
            <a href="#products">
              <img
                src="../../img/search-icon.png"
                alt="Search"
                className="search-icon"
              />
            </a>
          </div>
        </div>
        <div className="user__header">
          <Link to={"Register"}>
            <div className="register__btn">
              <button className="btn__gradient">Registrarse</button>
            </div>
          </Link>
          {/* <Link to={"Account"}>
          <div className="user-info__container">
            <div className="user-img__container">
              <img src="../../img/user.png" alt="User" className="user__img" />
            </div>
            <div className="user__info">
              <h3 className="userName">Someone</h3>
              <span className="userEmail">someone@example.com</span>
            </div>
          </div>
        </Link> */}
        </div>
      </header>
    </>
  );
};

export default Header;
