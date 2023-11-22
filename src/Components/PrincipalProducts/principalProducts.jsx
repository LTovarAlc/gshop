import "./principalProducts.css";
import { useEffect, useState } from "react";
import React from "react";
import CardProduct from "../CardsProducts/cardProducts";

const PrincipalProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fake-api-particles.vercel.app/principalArticles")
      .then((response) => response.json())
      .then((data) => {
        const twelveProducts = data.slice(0, 12);
        setProducts(twelveProducts);
      })
      .catch((error) => {
        console.log("Error al obtener los datos del producto", error);
      });
  }, []);

  return (
    <div className="productsContainer">
      <div className="cards__container">
        {products.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PrincipalProducts;
