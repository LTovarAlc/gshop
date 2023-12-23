import "./addProductForm.css";
import React from "react";

const AddProductForm = () => {
  return (
    <section>
      <form>
        <div className="addProduct-Input__container">
          <input
            type="text"
            id="itemName"
            name="itemName"
            required
            placeholder="Nombre del producto"
            className="addProduct__input"
          />
        </div>
        <div className="addProduct-Input__container">
          <label htmlFor="itemIMG">Imagen del producto</label>
          <input type="file" id="itemIMG" name="itemIMG" required 
          className="addProduct__input"/>
        </div>
        <div className="addProduct-Input__container">
          <input type="text" id="itemCategory" name="itemCategory" placeholder="Seleccione una categoria"
          className="addProduct__input"/>
        </div>
        <div className="addProduct-Input__container">
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
        <div className="addProduct-Input__container">
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
    </section>
  );
};

export default AddProductForm;
