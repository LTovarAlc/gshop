import "./slider.css";
import React from "react";
import CardSlider from "../CardSlider/cardSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        <CardSlider />
        <CardSlider />
        <CardSlider />
        <CardSlider />
        <CardSlider />
      </Slider>
    </div>
  );
};

export default CustomSlider;