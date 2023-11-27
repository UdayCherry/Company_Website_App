import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
const RoundedCarousel = () => {
    const settings = {
      centerMode: true,
      infinite: true,
      centerPadding: '0',
      slidesToShow: 3,
      speed: 500,
    };
  
    return (
      <div className="rounded-carousel-container">
        <Slider {...settings}>
          <div className="carousel-item">
            Treditionls methods of product support are ineffictive, highly manual complicate things
            <img src="image1.jpg" alt="Image 1" />
          </div>
          <div className="carousel-item">
            A machine-first approch offers solutionsto asselerate ticket resolution.
            Thankfully, we dont mean using clueless chatbots
            <img src="image2.jpg" alt="Image 2" />
          </div>
          <div className="carousel-item">
            Proactive Assistance
            The best complaints are those that dont need to be raised to all!!
            <img src="image3.jpg" alt="Image 3" />
          </div>
          
        </Slider>
      </div>
    );
  };
  
  export default RoundedCarousel;