import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Seeds from './Seeds';
import Crop_Protection from './Crop_Protection';
import Farming_Tools from './Farming_Tools';
import Plant_Nutrition from './Plant_Nutrition';
import Weather_Forecast from './Weather_Forecast';
import Kisan_Care from './Kisan_Care';

const Navbar = () => {
    return (
        <nav>
            <Route path='/' element={<Home />} />
            <Route path='/seeds' element={<Seeds />} />
            <Route path='/crop-protection' element={<Crop_Protection />} />
            <Route path='/plant-nutrition' element={<Plant_Nutrition />} />
            <Route path='/farming-tools' element={<Farming_Tools />} />
            <Route path='/weather-forecast' element={<Weather_Forecast />} />
            <Route path='/kisan-care' element={<Kisan_Care />} />
        </nav>
    )
}

export default Navbar