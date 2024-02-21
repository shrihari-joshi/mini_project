import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './navbar.css';

import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdPowerSettingsNew } from "react-icons/md";


const Home = () => {
   

    return (
        <div className='container'>
            <div className='left'>
                <Navbar />
            </div>

            <div className='right body'>
                <div className='icon-img'></div>

                <div>
                    <p className='title'>Kisaan Utsav</p>
                    <p className='h1'>Seeds of Change!</p>
                </div>

                

                <div
                    style={{display: "flex"}}
                    className='search-bar'
                >
                    {/* Add your search bar component or input here */}
                    <input type="text" placeholder="Search" />
                    <div className="search1" id="cart"><Link to='/cart'>{<FaCartPlus className='search' />}</Link>
                    
                    </div>
                    <div className="search1" id="wishlist"><Link to='/wishlist'>{<FaHeart className='search' />}</Link>
                    
                    </div>
                    <div className="search1" id="login" ><Link to='/register'>{<MdPowerSettingsNew className='search' />}</Link>
                    
                    </div>
                    <div className="search1" id="settings"><Link to='/settings'>{<IoSettingsSharp  className='search' />}</Link>
                    
                    </div>
                    
                </div>

               
                <div className="horizontal-line"></div>
            </div>
        </div>
    );
};


export default Home;
