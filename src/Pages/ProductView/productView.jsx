import React from "react";
import "./productView.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";

const ProductView = () => {
  return (
    <>
      <Header />
      <section className="productView">
        <div className="productView__img-container">
          <img
            src="../../img/insertIMG.png"
            alt="Imagen del prodcuto"
            className="productIMG"
          />
        </div>
        <div className="productView__details">
          <div className="productView__name-container">
            <h3 className="productView__name">Nombre del producto</h3>
          </div>
          <div className="productView__price__category-container">
            <span className="productView__price">$90.99</span>
            <span className="productView__category">Categoria</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductView;
