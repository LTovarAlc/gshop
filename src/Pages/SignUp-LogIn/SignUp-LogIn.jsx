import "./SignUp-LogIn.css";
import React from "react";
import BannerRegister from "../../Components/BannerRegister/bannerRegister";

const RegisterPage = () => {
  return (
      <section className="section__register">
        <div className="register__container">
          <BannerRegister />
        </div>
      </section>
  );
};

export default RegisterPage;
