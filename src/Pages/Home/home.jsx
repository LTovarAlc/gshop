import "./home.css";
import React from "react";
import CustomSlider from "../../Components/Slider/slider";
import PrincipalProducts from "../../Components/PrincipalProducts/principalProducts";


const Home = ({searchInput}) => {
  return <>
    <CustomSlider/>
    <PrincipalProducts searchInput={searchInput}/>
  </>
};

export default Home;
