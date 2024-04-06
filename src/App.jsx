import React from 'react'
import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home/Home';
import SignUp from './SignUp/SignUp';
import Login from './SignUp/Login';
import Sell_Products from './Sell_Products/Sell_Products';
import Seeds from './Seed/Seeds';
import Plant_Nutrition from './Plant_Nutrition/Plant_Nutrition';
import Weather_Forecast from './Weather_Forecast/Weather_Forecast';
import Kisan_Care from './Kisan_Care/Kisan_Care';
import About from './About/About';
import Farming_Tools from './Farming_Tools/Farming_Tools';
import Cart from './Cart/Cart';
import Wishlist from './Wishlist/Wishlist'
import Settings from './Settings/Settings'
import Navbar from './Navbar';
import './navbar.css'

import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdPowerSettingsNew } from "react-icons/md";

function App() {
    return (
        <main>
            <div className='left'>
                <Navbar />
            </div>
            <div className='container'>

                <div className='right body'>
                    <div
                        style={{ display: "flex" }}
                        className='search-bar'
                    >
                        <div className='head'>
                            <p className='title'>Kisaan Utsav</p>
                            <p className='h1'>Seeds of Change!</p>
                        </div>
                    

                        

                        <div>
                            <input type="text" placeholder="Search" />
                        </div>

                        <div className="search1" id="cart">
                            <Link to='/cart'>{<FaCartPlus className='search' />}</Link>
                        </div>
                        <div className="search1" id="wishlist"><Link to='/wishlist'>
                            {<FaHeart className='search' />}</Link>
                        </div>
                        <div className="search1" id="login" ><Link to='/signup'>
                            {<MdPowerSettingsNew className='search' />}</Link>
                        </div>
                        <div className="search1" id="settings">
                            <Link to='/settings'>{<IoSettingsSharp className='search' />}</Link>
                        </div>
                    </div>


                    <div className="horizontal-line"></div>
                </div>
            </div>


            <Routes > 
                <Route path="/" element={<Home />} /> {/* Define a home route */}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                {/* Define a route for Login */}
                <Route path="/seeds" element={<Seeds />} />
                <Route path="/sell_products" element={<Sell_Products />} />
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
