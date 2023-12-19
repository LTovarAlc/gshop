import "./home.css";
import React from "react";
import CustomSlider from "../../Components/Slider/slider";
import PrincipalProducts from "../../Components/PrincipalProducts/principalProducts";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Menu from "../../Components/Menu/menu"


const Home = ({searchInput}) => {
  return <>
    <Header/>
    <Menu/>
    <CustomSlider/>
    <PrincipalProducts searchInput={searchInput}/>
  </>
};

export default Home;
