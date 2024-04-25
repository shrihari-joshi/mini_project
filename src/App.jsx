import React from 'react';
import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home/Home';
import SignUp from './SignUp/SignUp';
import Login from './SignUp/Login';
import Register from './SignUp/Register';
import Seeds from './Seed/Seeds';
import Plant_Nutrition from './Plant_Nutrition/Plant_Nutrition';
import WeatherForecast from './Weather_forecast/WeatherForecast';
import Kisan_Care from './Kisan_Care/Kisan_Care';
import About from './About/About';
import Cart from './Cart/Cart';
import Wishlist from './WishList/Wishlist';
import Settings from './Settings';
import Navbar from './Navbar/Navbar';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdPowerSettingsNew } from "react-icons/md";
import ImageSlider from './Slider/Slider';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <div className='container'>
                    <div className='body'>
                        <div style={{ display: "flex" }}>
                            <div className='head'>
                                <Link to='/home'>
                                    <img src="icon.jpg" alt="Description of the image" className='title' />
                                </Link>
                            </div>
                            <div className='left'>
                                <Navbar />
                            </div>
                            <div className='search-bar'>
                                <input className='inputser' type="text" placeholder="Search" />
                            </div>
                            <div className="search1" id="cart">
                                <Link to='/cart'>
                                    {<FaCartPlus className='search' />}
                                </Link>
                            </div>
                            <div className="search1" id="wishlist">
                                <Link to='/wishlist'>
                                    {<FaHeart className='search' />}
                                </Link>
                            </div>
                            <div className="search1" id="login">
                                <Link to='/signup'>
                                    {<MdPowerSettingsNew className='search' />}
                                </Link>
                            </div>
                        </div>
                        <div className="horizontal-line"></div>
                    </div>
                </div>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/seeds" element={<Seeds />} />
                    <Route path="/weather-forecast" element={<WeatherForecast />} />
                    {/* <Route path='/pant-nutrition' element={Plant_Nutrition} /> */}
                    <Route path="/kisan-care" element={<Kisan_Care />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/plant-nutrition" element={<Plant_Nutrition />} />
                </Routes>
            </main>
        </QueryClientProvider>
    );
}

export default App;