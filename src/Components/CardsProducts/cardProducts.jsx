import "./cardProducts.css"
import React from "react"

const CardProduct = ({product}) => {

    const { articleIMG, articleName, articlePrice, articleCategory} = product;

    return <>
        <div className="cardProduct">
            <img src={articleIMG} alt="Product" className="cardProduct__img"/>
            <div className="cardProduct__info">
                <h1 className="cardProduct__info-title">{articleName}</h1>
                <span className="cardProduct__info-price">{`$${articlePrice}`}</span>
                <div className="cardProduct__info-category">{articleCategory}</div>
            </div>
        </div>
    </>
}

export default CardProduct