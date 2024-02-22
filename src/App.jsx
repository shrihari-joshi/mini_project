import React from 'react'
import { useState } from 'react';
import { Route, Routes,Link } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Register from './Register';
import Crop_Protection from './Crop_Protection';
import Seeds from './Seeds';
import Plant_Nutrition from './Plant_Nutrition';
import Weather_Forecast from './Weather_Forecast';
import Kisan_Care from './Kisan_Care';
import ContactUs from './ContactUs';
import './navbar.css'
import Cart from './Cart';

function App() {

    return (
        <main>
            
            
            <Routes >
                <Route path="/" element={<Home />} /> {/* Define a home route */}
                <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/login" element={<Login/>} />
                    {/* Define a route for Login */}
                    <Route path="/register" element={<Register/>} />
                <Route path="/seeds" element={<Seeds/>} />
                <Route path="/crop-protection" element={<Crop_Protection />} /> 
                <Route path="/plant-nutrition" element={<Plant_Nutrition />} /> 
                <Route path="/weather-forecast" element={<Weather_Forecast />} /> 
                <Route path="/kisan-care" element={<Kisan_Care />} /> 
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
            
        </main>
    );
}

export default App;
