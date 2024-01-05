import React from "react";
import "./modalCart.css"

const ModalCart = ({closeModal}) => {
    return <div className="modalBackground">
        <div className="modalCart__content">
        <img src="../../img/close.png" alt="Cerrar" className="closeBtnCart" onClick={closeModal}/>
            <h2>Este es tu carrito de compras</h2>
            <div className="productsInCart__container">

            </div>
            <div className="modalCartBtns__container">
                <button className="cleanCart">Limpiar carrito</button>
                <button className="buyCart">Comprar</button>
            </div>
        </div>
    </div>
}

export default ModalCart