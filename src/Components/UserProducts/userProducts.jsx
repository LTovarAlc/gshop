import React, { useState } from "react";
import "./userProducts.css";
import AddProductsModal from "../ModalAddProduct/addProduct";

const UserProducts = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="userProducts">
      <div className="userProducts__container">
        <div className="addProducts__container" onClick={openModal}>
          <h3>
            Aun no publicas artículos <br />
            ¡Publiquemos algunos!
          </h3>
          <img src="../../img/agregar.png" alt="Agregar Producto" className="addbtn" />
        </div>
      </div>
      {modalOpen && <AddProductsModal closeModal={closeModal} />}
    </section>
  );
};

export default UserProducts;
