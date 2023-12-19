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
    <section className="sliderSection">
      <div className="sliderSection__title-container">
        <div className="sliderSection__title">
          <h1 className="slider__title">MAS POPULARES!</h1>
        </div>
      </div>
      <div className="sliderContainer">
        <Slider {...settings}>
          <CardSlider />
          <CardSlider />
          <CardSlider />
          <CardSlider />
          <CardSlider />
        </Slider>
      </div>
    </section>
  );
};

export default CustomSlider;
