import "./SignUp-LogIn.css";
import React from "react";
import BannerRegister from "../../Components/BannerRegister/bannerRegister";
import FormRegister from "../../Components/FormRegister/formRegister";

const RegisterPage = () => {
  return (
      <section className="section__register">
          <BannerRegister />
          <FormRegister/>
      </section>
  );
};

export default RegisterPage;
