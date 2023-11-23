import "./principalProducts.css";
import { useEffect, useState } from "react";
import React from "react";
import CardProduct from "../CardsProducts/cardProducts";

const PrincipalProducts = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(12); //cantidad inicial (muestra los primero 12)
  const productsPerPage = 12; // cantidad de productos por pagina

  useEffect(() => {
    fetch("https://fake-api-particles.vercel.app/principalArticles")
      .then((response) => response.json())
      .then((data) => {
        const shuffledProducts = shuffleArray(data) 
        setProducts(shuffledProducts); //Almacena los elementos de la API reordenados
      })
      .catch((error) => {
        console.log("Error al obtener los datos del producto", error);
      });
  }, []);

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporalyValue, randomIndex;

    while(currentIndex !== 0){
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1;

      temporalyValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporalyValue;
    }
    return array;
  };

  const loadMoreProducts = () =>{
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + productsPerPage);
  }

  return (
    <div className="productsContainer">
      <div className="cards__container">
        {products.slice(0, visibleProducts).map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
      </div>
      {visibleProducts < products.length && (
        <button onClick={loadMoreProducts} className="moreProducts" >Ver más</button>
      )}
    </div>
  );
};

export default PrincipalProducts;
