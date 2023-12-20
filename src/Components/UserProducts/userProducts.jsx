import React from "react";
import "./userProducts.css";

const UserProducts = () => {
  return (
    <section className="userProducts">
      <div className="userProducts__container">
        <div className="addProducts__container">
          <h3>
            Aun no publicas articulos <br />
            ¡Publiquemos algunos!
          </h3>
          <img src="../../img/agregar.png" alt="Agregar Producto" className="addbtn"/>
        </div>
      </div>
    </section>
  );
};

export default UserProducts;
