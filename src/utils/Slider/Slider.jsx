import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
    <div className="imagediv">
      <div>
        <img src="image2.jpeg" alt="1" />
      </div>
    </div>

    <div className="imagediv">
      <div>
        <img src="icon.jpg" alt="2" />
      </div>
    </div>
    
    {/* <div className="imagediv">
      <div>
        <img src="image3.jpeg" alt="3" />
      </div>
    </div> */}
      
    </Slider>
  );
};

export default ImageSlider;
