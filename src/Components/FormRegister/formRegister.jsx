import React from "react";

const FormRegister = () => {
    return <>
    <h2 className="form__title">Registrarse</h2>
        <form action="" className="formRegister">
          <div className="input__container-forms">
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
          <div className="input__container-forms">
            <input
              type="text"
              name="email"
              id="email"
              required
              placeholder="Correo electronico..."
            />
          </div>
          <div className="input__container-forms">
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
        <div className="btnSubmit__container">
          <button type="submit" className="btn__submit">Registrarse</button>
        </div>
    </>
}

export default FormRegister