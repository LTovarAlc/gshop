import "./bannerRegister.css";
import React from "react";
import "animate.css";
import { Link } from "react-router-dom";

const BannerRegister = () => {
  return (
    <div className="banner gradient">
      <Link to={"/"}>
        <div className="logo__container animate__animated animate__backInDown">
          <img src="../../img/logoBanner.png" alt="" className="logoBanner" />
        </div>
      </Link>
      <div className="presentation__banner animate__animated animate__bounceInDown ">
        <h1 className="text__banner animate__animated animate__bounce animate__delay-4s animate__repeat-2">
          G-SHOP <br /> TE DA LA <br /> BIENVENIDA!
        </h1>
      </div>
    </div>
  );
};

export default BannerRegister;
