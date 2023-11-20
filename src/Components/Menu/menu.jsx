import React from "react";
import { Link } from "react-router-dom";

import "./menu.css";

const Menu = () => {
  return (
    <>
      <nav className="navbar">
        <div className="menu">
            <ul className="list">
                <Link to={"/"} className="links">Inicio</Link>
                <Link to={"/Account"} className="links">Perfil</Link>
                <Link to={"/Account"} className="links">Vender</Link>
                <span className="links">Ofertas</span>
                <span className="links">Categorias</span>
                <span className="links shopycar__container">
                    <span>Mi carrito</span>
                    <img src="../../img/ShopyCar.png" alt="Shop car" className="Shopycar"/>
                </span>
            </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
