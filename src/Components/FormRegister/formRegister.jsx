import "./formRegister.css";
import "animate.css";
import React from "react";

const FormRegister = () => {
  return (
    <section className="section__form">
      <div className="form__container animate__animated animate__bounceInRight animate__delay-2s">
        <form action="" className="formRegister">
          <div className="input__container">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Nombre..."
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              placeholder="Apelldos..."
            />
          </div>
          <div className="input__container">
            <input
              type="text"
              name="email"
              id="email"
              required
              placeholder="Correo electronico..."
            />
          </div>
          <div className="input__container">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              required
              pattern="^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,14}$"
            />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirmar contraseña"
              required
            />
          </div>
        </form>
        <div className="btnSumbmit__container">
          <button type="submit">Registrarse</button>
        </div>
        <div className="IGAC__container">
          <span className="IGAC">I got an account</span>
        </div>
      </div>
    </section>
  );
};

export default FormRegister;
