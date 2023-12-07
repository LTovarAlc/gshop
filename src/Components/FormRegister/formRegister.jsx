import React, { useState } from "react";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,14}$/.test(password);

  const validateFormData = () => {
    const newErrors = {
      name: formData.name.length > 25 ? "Maximo 25 caracteres" : "",
      lastName: formData.lastName.length > 25 ? "Maximo 25 caracteres" : "",
      email: !validateEmail(formData.email) ? "Correo invalido" : "",
      password: !validatePassword(formData.password)
        ? "Contraseña invalida"
        : "",
      confirmPassword:
        formData.confirmPassword !== formData.password
          ? "Las contraseñas no coinciden"
          : "",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateFormData();

    if (isFormValid) {
      // Realizar acciones si el formulario es válido
    }
  };

  return (
    <>
      <h2 className="form__title">Registrarse</h2>
      <form action="" className="formRegister" onSubmit={handleSubmit}>
        <div className="input__container-forms">
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Nombre..."
            onChange={handleInputChange}
          />
          <span className="error">{errors.name}</span>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            placeholder="Apellidos..."
            onChange={handleInputChange}
          />
          <span className="error">{errors.lastName}</span>
        </div>
        <div className="input__container-forms">
          <input
            type="text"
            name="email"
            id="email"
            required
            placeholder="Correo electronico..."
            onChange={handleInputChange}
          />
          <span className="error">{errors.email}</span>
        </div>
        <div className="input__container-forms">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Contraseña"
            required
            onChange={handleInputChange}
          />
          <span className="error">{errors.password}</span>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirmar contraseña"
            required
            onChange={handleInputChange}
          />
          <span className="error">{errors.confirmPassword}</span>
          <span className="show__password" onClick={togglePasswordVisibility}>
            {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          </span>
        </div>
        <div className="btnSubmit__container">
          <button type="submit" className="btn__submit">
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
};

export default FormRegister;
