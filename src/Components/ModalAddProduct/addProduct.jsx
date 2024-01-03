import React from "react";
import AddProductForm from "../AddProductsFORM/addProductForm";
import "./addProduct.css";
import 'animate.css'

const AddProductsModal = ({ closeModal }) => {
  return (
    <div className="modalBackground animate__animated animate__fadeInLeftBig">
      <div className="modalContent animate__animated animate__fadeInLeftBig">
        <img src="../../img/close.png" alt="Cerrar" className="closeBtn" onClick={closeModal} />
        <h2>¡Agregue su nuevo producto!</h2>
        <div className="addProductsForm__container">
          <AddProductForm />
        </div>
        <div className="modalBtns">
          <button className="addProduct__submit">Publicar Producto</button>
          <button className="addProduct__cancel" onClick={closeModal}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductsModal;
