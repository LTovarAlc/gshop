import "./formLogin.css"

const FormLogin = () =>{
    return <>
        <div className="form__container animate__animated animate__bounceInRight animate__delay-1s">
        <h2 className="form__title">Iniciar Sesion</h2>
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
        <div className="IGAC__container">
          <span className="IGAC">Ya tengo una cuenta</span>
        </div>
      </div>
    </>
}

export default FormLogin