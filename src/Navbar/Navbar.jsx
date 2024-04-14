import React, { useState } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import './navbar.css';


const Navbar = () => {
    
    return (
        <div className="left-navbar">
            <ul className='navbar'>
                <li className='border'><Link to='/seeds'>Seeds</Link></li>
                <li className='border'><Link to='/weather-forecast'>Weather Forecast</Link></li>
                <li className='border'><Link to='/plant-nutrition'>Plant Nutrition</Link></li>
                <li className='border'><Link to='/crop-protection'>Sell Products</Link></li>
                <li className='border'><Link to='/kisan-care'>Kisan Care</Link></li>
            </ul>
                
        </div>
    )
}

export default Navbar