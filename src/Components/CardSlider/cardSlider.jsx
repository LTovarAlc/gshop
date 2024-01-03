import "./cardSlider.css";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardSlider = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://fake-api-particles.vercel.app/principalArticles")
      .then((response) => response.json())
      .then((data) => {
        // Obtener 5 elementos aleatorios del arreglo de la API
        const randomProducts = [];
        const numberOfProducts = 1;
        const dataLength = data.length;

        for (let i = 0; i < numberOfProducts; i++) {
          const randomIndex = Math.floor(Math.random() * dataLength);
          randomProducts.push(data[randomIndex]);
        }

        // Actualizar el estado con los 5 productos aleatorios
        setProductData(randomProducts);
      })
      .catch((error) => {
        console.error("Error al obtener datos del producto", error);
      });
  }, []);

  return (
    <section className="container__cards">
      {productData.map((product, index) => (
        <Link to={"/ProductView"}>
          <div key={index} className="cardslider">
            <img
              src={product.articleIMG}
              alt="Product"
              className="product__img"
            />
            <div className="articleInfo__container">
              <h2 className="articleName">{product.articleName}</h2>
              <span className="articlePrice">{`$${product.articlePrice}`}</span>
              <span className="articleCategory">{product.articleCategory}</span>
            </div>
            <img
              src="../../img/gshop-black-icon.png"
              alt="G-shop icon"
              className="gshop__icon-card"
            />
          </div>
        </Link>
      ))}
    </section>
  );
};

export default CardSlider;
