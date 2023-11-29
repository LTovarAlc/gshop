import "./bannerRegister.css"
import React from "react"

const BannerRegister = () => {
    return<div className="banner">
        <div className="logo__container">
            <img src="../../img/logoBanner.png" alt="" className="logoBanner" />
        </div>
        <div className="presentation__banner">
            <h1 className="text__banner">
                G-SHOP <br /> TE DA LA <br /> BIENVENIDA!
            </h1>
        </div>
    </div>
}

export default BannerRegister