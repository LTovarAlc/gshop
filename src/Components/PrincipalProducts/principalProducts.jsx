import "./principalProducts.css";
import { useEffect, useState } from "react";
import React from "react";
import CardProduct from "../CardsProducts/cardProducts";

const PrincipalProducts = ({ searchInput }) => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8); //cantidad inicial (muestra los primero 12)
  const productsPerPage = 8; // cantidad de productos por pagina

  useEffect(() => {
    fetch("https://fake-api-particles.vercel.app/principalArticles")
      .then((response) => response.json())
      .then((data) => {
        const shuffledProducts = shuffleArray(data);
        setProducts(shuffledProducts); //Almacena los elementos de la API reordenados
      })
      .catch((error) => {
        console.log("Error al obtener los datos del producto", error);
      });
  }, []);

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporalyValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporalyValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporalyValue;
    }
    return array;
  };

  const loadMoreProducts = () => {
    setVisibleProducts(
      (prevVisibleProducts) => prevVisibleProducts + productsPerPage
    );
  };

  const filteredProducts = products.filter((product) =>
    product.articleCategory.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <section className="principalProducts__section">
      <h1 className="principalProducts__title">Nuestros Productos</h1>
      <div className="productsContainer" id="products">
        <div className="cards__container">
          {filteredProducts.slice(0, visibleProducts).map((product, index) => (
            <CardProduct key={index} product={product} />
          ))}
        </div>
        {visibleProducts < filteredProducts.length && (
          <button onClick={loadMoreProducts} className="moreProducts">
            Ver más
          </button>
        )}
      </div>
    </section>
  );
};

export default PrincipalProducts;
