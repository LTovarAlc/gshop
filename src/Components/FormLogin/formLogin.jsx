import "./formLogin.css"
import React, { useState } from "react";

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <h2 className="form__title">Iniciar Sesion</h2>
      <form action="" className="formRegister">
        <div className="input__container-forms">
          <input
            type="text"
            name="email"
            id="email"
            required
            placeholder="Correo electronico"
          />
        </div>
        <div className="input__container-forms">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Contraseña"
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirmar contraseña"
            required
          />
          <span className="show__password" onClick={togglePasswordVisibility}>
            {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          </span>
        </div>
      </form>
      <div className="btnSubmit__container">
        <button type="submit" className="btn__submit">
          Iniciar sesion
        </button>
      </div>
    </>
  );
};

export default FormLogin;
