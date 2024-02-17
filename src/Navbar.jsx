import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to= '/'>Home</Link></li>
                <li><Link to='/seeds'>Seeds</Link></li>
                <li><Link to='/crop-protection'>Crop Protection</Link></li>
                <li><Link to='/plant-nutrition'>Plant Nutrition</Link></li>
                <li><Link to='/farming-tools'>Farming Tools</Link></li>
                <li><Link to='/weather-forecast'>Weather Forecast</Link></li>
                <li><Link to='/kisan-care'>Kisan Care</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        
        </nav>
    )
}

export default Navbar