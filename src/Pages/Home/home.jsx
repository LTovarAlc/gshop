import "./home.css";
import React from "react";
import CustomSlider from "../../Components/Slider/slider";
import PrincipalProducts from "../../Components/PrincipalProducts/principalProducts";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Menu from "../../Components/Menu/menu"


const Home = ({searchInput}) => {
  return <section className="Home">
    <Header/>
    <Menu/>
    <CustomSlider/>
    <PrincipalProducts searchInput={searchInput}/>
    <Footer/>
  </section>
};

export default Home;
