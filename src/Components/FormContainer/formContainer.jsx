import "./formContainer.css";
import "animate.css";
import React, { useState } from "react";
import FormRegister from "../FormRegister/formRegister";
import FormLogin from "../FormLogin/formLogin";

const FormContainer = () => {
  const [showRegister, setShowRegister] = useState(true);

  const toggleForm = () => {
    setShowRegister((prevShowRegister) => !prevShowRegister);
  };

  return (
    <section className="section__form">
      <div className="form__container animate__animated animate__bounceInRight animate__delay-1s">
        {showRegister ? <FormRegister /> : <FormLogin />}
        <div className="IGAC__container">
          <span className="IGAC" onClick={toggleForm}>
            {showRegister ? "Ya tengo una cuenta" : "Crear cuenta"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default FormContainer;
