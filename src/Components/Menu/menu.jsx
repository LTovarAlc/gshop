import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./menu.css";

const Menu = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return() => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();

  if(location.pathname === '/Register'){
    return null
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
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
