import "./SignUp-LogIn.css";
import React from "react";
import BannerRegister from "../../Components/BannerRegister/bannerRegister";
import FormContainer from "../../Components/FormContainer/formContainer";

const RegisterPage = () => {
  return (
      <section className="section__register">
          <BannerRegister />
          <FormContainer/>
      </section>
  );
};

export default RegisterPage;
