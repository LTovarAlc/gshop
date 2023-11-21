import "./slider.css";
import React from "react";
import CardSlider from "../CardSlider/cardSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props){
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent", filter: "invert(100%)"}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props){
    const {className, style, onClick} = props;
    return(
        <div
            className={className}
            style={{...style, display: "block", background: "transparent", filter: "invert(100%)",}}
            onClick={onClick}
        >

        </div>
    )
}

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
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
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