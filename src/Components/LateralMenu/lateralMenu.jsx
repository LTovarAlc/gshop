import { Link } from "react-router-dom";
import "./lateralMenu.css";
import React from "react";

const LateralMenu = () => {
  return (
    <section className="lateralMenu__container">
      <Link to={"/"}>
        <img
          src="../../img/Gshop-logo.png"
          alt="Logo"
          className="lateralMenu__logo"
        />
      </Link>
      <div className="lateralMenu__list">
        <ol className="profileList">
          <li className="items__list">Mis compras</li>
          <li className="items__list">Vender</li>
          <li className="items__list">Mi carrito</li>
          <li className="items__list">Lista de deseos</li>
          <li className="items__list">Pedidos</li>
        </ol>
        <ol className="GshopList">
          <li className="items__list">Ajustes</li>
          <li className="items__list">Seguridad</li>
          <li className="items__list">Privacidad</li>
          <li className="items__list">Quiero ser vendedor</li>
          <li className="items__list">Ayuda</li>
          <li className="items__list">Protege tu marca</li>
          <li className="items__list">Información corporativa</li>
        </ol>
      </div>
    </section>
  );
};

export default LateralMenu;
