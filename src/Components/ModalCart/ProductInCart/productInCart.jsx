import React, { useState } from "react";
import "./productInCart.css";

const ProductInCart = () => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="productInCard__card">
      <div className="cardIMGs__container">
        <img
          src="../../img/insertIMG.png"
          alt="Product IMG"
          className="productIMG__card"
        />
      </div>
      <div className="productDetail__card">
        <span className="productName__card">Nombre del producto</span>
        <div className="productprice-category__card">
          <span className="category__card">Categoria</span>
          <span className="price__card">Precio</span>
        </div>
      </div>
      <div className="productBTNS__card">
        <div className="counterBTNS">
          <button className="plus" onClick={increaseQuantity}>+</button>
          <span className="quantity">{quantity}</span>
          <button className="minus" onClick={decreaseQuantity}>-</button>
        </div>
        <button className="deleteBtn"><img src="../../img/delete.png" alt="delete" className="delete"/></button>
      </div>
    </div>
  );
};

export default ProductInCart;
