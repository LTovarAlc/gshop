import "./addProductForm.css";
import React from "react";
import 'animate.css'

const AddProductForm = () => {
  return (
    <form className="addProductForm">
      <div className="infoProduct">
        <div className="InfoProduct__img">
            <img src="../../img/insertIMG.png" alt="Cargar imagen" className="insertIMG" />
        </div>
        <div className="name__price">
          <div className="addProduct-Input__containerEssential">
            <input
              type="text"
              id="itemName"
              name="itemName"
              required
              placeholder="Nombre del producto"
              className="addProduct__input"
            />
          </div>
          <div className="addProduct-Input__containerEssential">
            <input
              type="number"
              id="itemPrice"
              name="itemPrice"
              step="0.01"
              required
              placeholder="Precio del producto"
              className="addProduct__input"
            />
          </div>
        </div>
      </div>
      <div className="addProduct-Input__containerSpecifications">
        <input
          type="text"
          id="itemCategory"
          name="itemCategory"
          placeholder="Seleccione una categoria"
          className="addProduct__input"
        />
      </div>
      <div className="addProduct-Input__containerSpecifications">
        <textarea
          id="itemDescription"
          name="itemDescription"
          rows="4"
          required
          placeholder="Describa lo que vende"
          className="addProduct__input"
        ></textarea>
      </div>
    </form>
  );
};

export default AddProductForm;
