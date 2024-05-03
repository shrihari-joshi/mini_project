import React, { useEffect, useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
import './home.css';
// import Slider from 'react-slick';
import ImageSlider from '../Slider/Slider';
// import Image1 from '../icon.jpg';
// import Image2 from '../image1.jpeg'; 
// import Image3 from '../image2.jpeg';
// import Image4 from '../image3.jpgx';

const Home = () => {

    const images = [
        // Image1,
        // Image2,
        // Image3,
        // Image4,
        // Image2,
        // Image3,
        // Image1,
        // Add more image URLs here
      ];

    return (
       
            <div className="App">
                <div>
                    <p className='home-heading1'>Welcome to</p>
                    <p className='home-heading2'>Kisaan Care</p>

                </div>

                <div style={{padding: "10px"}}>
                    <ImageSlider images={images} />
                </div>
            </div>
  
    );
};


export default Home;