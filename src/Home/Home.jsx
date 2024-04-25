import React, { useEffect, useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
import './home.css';
// import Slider from 'react-slick';
import ImageSlider from '../Slider/Slider';

const Home = () => {

    return (
       <div className='mainbase'>
           <p>Welcome!!</p>
                <ImageSlider/>
            
       </div>
    );
};


export default Home;