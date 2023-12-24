import AddProductForm from "../AddProductsFORM/addProductForm";
import "./addProduct.css";
import React from "react";
import 'animate.css'

const AddProductsModal = () => {
  return (
    <div className="modalBackground animate__animated animate__fadeInLeftBig">
      <div className="modalContent animate__animated animate__fadeInLeftBig">
        <h2>¡Agregue su nuevo producto!</h2>
        <div className="addProductsForm__container">
          <AddProductForm />
        </div>
        <div className="modalBtns">
          <button className="addProduct__submit">Publicar Producto</button>
          <button className="addProduct__cancel">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default AddProductsModal;
