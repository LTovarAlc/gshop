import "./footer.css"
import React from "react";

const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // desplazamiento suave
        })
    }

    return <footer className="footer">
        <button className="toUp" onClick={handleScrollToTop}>Ir arriba</button>
        <div className="footer__info">
            <div className="brandInfo">
                <h3 className="titles">Conócenos</h3>
                <span className="footer__links">Trabajar en G-Shop</span>
                <span className="footer__links">Información corporativa</span>
                <span className="footer__links">G-Shop Science</span>
            </div>
            <div className="bussinesInfo">
                <h3 className="titles">Gana dinero con G-Shop</h3>
                <span className="footer__links">Vender</span>
                <span className="footer__links">Protege y desarrolla tu marca</span>
                <span className="footer__links">Anuncia tus productos</span>
            </div>
            <div className="clientService">
                <h3 className="titles">¿Podemos ayudarte?</h3>
                <span className="footer__links">Devolver producto</span>
                <span className="footer__links">Remplazar producto</span>
                <span className="footer__links" title="Contacta con servicio al cliente">Ayuda</span>
            </div>
            <div className="devInfo">
                <h3 className="devInfo__name">Luis Tovar</h3>
                <span className="devInfo__FE">Frontend Developer</span>
                <div className="socialMedia">
                    <img src="../../img/x.png" alt="" className="socialMedia__icons" />
                    <img src="../../img/linkedin.png" alt="" className="socialMedia__icons" />
                    <img src="../../img/github.png" alt="" className="socialMedia__icons" />
                    <img src="" alt="" className="socialMedia__icons" />
                </div>            
            </div>
        </div>
        <div className="G-Shop__footer">
            <img src="../../img/Gshop-icon.png" alt="Logo G-Shop" className="logo__gshop" />
            <span>G-shop 2023 &copy;</span>
        </div>
    </footer>
}

export default Footer