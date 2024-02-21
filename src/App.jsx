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
import About from './About';
import './navbar.css'
import Farming_Tools from './Farming_Tools';
import Cart from './Cart';
import Wishlist from './Wishlist'
import Settings from './Settings'

function App() {
    const [users, setUsers] = useState(localStorage.getItem('users') || [])
    return (
        <main>
            
                
            <Routes >
                <Route path="/" element={<Home />} /> {/* Define a home route */}
                <Route path="/signup" element={<SignUp
                    users={users}
                    setUsers={setUsers}
                />}/>
                    <Route path="/login" element={<Login
                        users={users}
                    />} />
                    {/* Define a route for Login */}
                    <Route path="/register" element={<Register
                        users={users}
                        setUsers={setUsers}
                    />} />
                <Route path="/seeds" element={<Seeds/>} />
                <Route path="/crop-protection" element={<Crop_Protection />} /> 
                <Route path="/plant-nutrition" element={<Plant_Nutrition />} /> 
                <Route path="/farming-tools" element={<Farming_Tools />} /> 
                <Route path="/weather-forecast" element={<Weather_Forecast />} /> 
                <Route path="/kisan-care" element={<Kisan_Care />} /> 
                <Route path="/cart" element={<Cart />} /> 
                <Route path="/wishlist" element={<Wishlist />} /> 
                <Route path="/settings" element={<Settings />} /> 
                <Route path="/About" element={<About />} /> 
            </Routes>
            
        </main>
    );
}

export default App;
