import "./home.css";
import { useState, useEffect } from "react";
import React from "react";
import CustomSlider from "../../Components/Slider/slider";
import PrincipalProducts from "../../Components/PrincipalProducts/principalProducts";


const Home = () => {
  return <>
    <CustomSlider/>
    <PrincipalProducts/>
  </>
};

export default Home;
