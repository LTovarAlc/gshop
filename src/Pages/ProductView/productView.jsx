import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./productView.css";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";

const ProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fake-api-particles.vercel.app/principalArticles/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error al obtener detalles del producto:", error);
      });
  }, [id]);

  return (
    <>
      <Header />
      <section className="productView">
        <div className="productView__container">
          {product ? (
            <div className="productView__info">
              <div className="productView__img-container">
                <img
                  src={product.articleIMG}
                  alt="Imagen del producto"
                  className="productIMG"
                />
              </div>
              <div className="productView__details">
                <div className="productView__name-container">
                  <h3 className="productView__name">{product.articleName}</h3>
                </div>
                <div className="productView__price__category-container">
                  <span className="productView__price">{`$${product.articlePrice}`}</span>
                  <span className="productView__category">{product.articleCategory}</span>
                </div>
                <div className="productView__description-container">
                  <div className="productView__description">{product.articleDescription}</div>
                </div>
              </div>
            </div>
          ) : (
            <p>Cargando detalles del producto...</p>
          )}
          <div className="productView__relationated">
            <h3>Productos relacionados</h3>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductView;
