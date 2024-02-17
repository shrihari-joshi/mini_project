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
        <nav className='left-navbar'>
            <ul className='navbar'>
                <li className='border'><Link to= '/' className='nav-link'>Home</Link></li>
                <li className='border'><Link to='/seeds' className='nav-link'>Seeds</Link></li>
                <li className='border'><Link to='/crop-protection' className='nav-link'>Crop Protection</Link></li>
                <li className='border'><Link to='/plant-nutrition' className='nav-link'>Plant Nutrition</Link></li>
                <li className='border'><Link to='/farming-tools' className='nav-link'>Weather Forecast</Link></li>
                <li className='border'><Link to='/weather-forecast' className='nav-link'>Kisan Care</Link></li>
                {/* <li className='border'><Link to='/kisan-care'>Seeds</Link></li> */}
                <li className='border'><Link to="/login" className='nav-link'>Login</Link></li>
                <li><Link to="/register" className='nav-link'>Register</Link></li>
            </ul>
        
        </nav>
    )
}

export default Navbar