import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "animate.css"

import "./menu.css";
import ModalCart from "../ModalCart/modalCart";

const Menu = () => {

  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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

  //open cartModal

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add('modal-open');
  }

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove('modal-open')
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="menu menu__gradient">
            <ul className="list">
                <Link to={"/"} className="links">Inicio</Link>
                <Link to={"/Account"} className="links">Perfil</Link>
                <Link to={"/Account"} className="links">Vender</Link>
                <span className="links">Ofertas</span>
                <span className="links">Categorias</span>
                <span className="links shopycar__container" onClick={openModal}>
                    <span>Mi carrito</span>
                    <img src="../../img/ShopyCar.png" alt="Shop car" className="Shopycar"/>
                </span>
            </ul>
        </div>
        {modalOpen && <ModalCart closeModal={closeModal}/>}
      </nav>
    </>
  );
};

export default Menu;
