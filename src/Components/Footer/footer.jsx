import "./footer.css"
import React from "react";

const Footer = () => {
    return <footer className="footer">
        <button className="toU">Ir arriba</button>
        <div className="footer__info">
            <div className="brandInfo">
                <h3 className="brandInfo__title">Conócenos</h3>
                <span className="brandInfo__links">Trabajar en G-Shop</span>
                <span className="brandInfo__links">Información corporativa</span>
                <span className="brandInfo__links">G-Shop Science</span>
            </div>
            <div className="bussinesInfo">
                <h3 className="bussinesInfo__title">Gana dinero con G-Shop</h3>
                <span className="bussinesInfo__links">Vender</span>
                <span className="bussinesInfo__links">Protege y desarrolla tu marca</span>
                <span className="bussinesInfo__links">Anuncia tus productos</span>
            </div>
            <div className="clientService">
                <h3 className="clientService__title">¿Podemos ayudarte?</h3>
                <span className="clientService__links">Devolver producto</span>
                <span className="clientService__links">Remplazar producto</span>
                <span className="clientService__links" title="Contacta con servicio al cliente">Ayuda</span>
            </div>
            <div className="devInfo">
                <h3 className="devInfo__name">Luis Tovar</h3>
                <span className="devInfo__FE">Frontend Developer</span>
                <div className="socialMedia">
                    <img src="" alt="" className="socialMedia__icons" />
                    <img src="" alt="" className="socialMedia__icons" />
                    <img src="" alt="" className="socialMedia__icons" />
                    <img src="" alt="" className="socialMedia__icons" />
                </div>            
            </div>
        </div>
        <div className="G-Shop__footer">
            <img src="../../img/Gshop-icon.png" alt="Logo G-Shop" />
            <span>G-shop 2023 &copy;</span>
        </div>
    </footer>
}

export default Footer