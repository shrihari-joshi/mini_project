import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Home';
import Seeds from './Seeds';
import Crop_Protection from './Crop_Protection';
import Farming_Tools from './Farming_Tools';
import Plant_Nutrition from './Plant_Nutrition';
import Weather_Forecast from './Weather_Forecast';
import Kisan_Care from './Kisan_Care';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to= '/'>Home</Link></li>
                <li><Link to='/seeds'>Seeds</Link></li>
                <li><Link to='/crop-protection'>Crop Protection</Link></li>
                <li><Link to='/plant-nutrition'>Plant Nutrition</Link></li>
                <li><Link to='/farming-tools'>Weather Forecast</Link></li>
                <li><Link to='/weather-forecast'>Kisan Care</Link></li>
                <li><Link to='/kisan-care'>Seeds</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        
        </nav>
    )
}

export default Navbar