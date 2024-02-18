import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './navbar.css';

import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa6";

const Home = () => {
    const [isSlidingBarOpen, setSlidingBarOpen] = useState(false);
    const slidingBarRef = useRef(null);
    const toggleButtonRef = useRef(null);

    const toggleSlidingBar = () => {
        setSlidingBarOpen(true);
    };

    const closeSlidingBar = () => {
        setSlidingBarOpen(false);
    };

    return (
        <div className='container'>
            <div className={`left ${isSlidingBarOpen ? 'sliding-bar-open' : ''}`}>
                <Navbar />
            </div>

            <div className='right body'>
                <div className='icon-img'></div>

                <div>
                    <p className='title'>Kisaan Utsav</p>
                    <p className='h1'>Seeds of Change!</p>
                </div>

                <div
                    className={`toggle-button ${isSlidingBarOpen ? 'hidden' : ''}`}
                    onClick={toggleSlidingBar}
                    ref={toggleButtonRef}
                >
                    ☰
                </div>

                <div
                    style={{display: "flex"}}
                    className={`search-bar ${isSlidingBarOpen ? 'hidden' : ''}`}
                >
                    {/* Add your search bar component or input here */}
                    <input type="text" placeholder="Search" />
                    <div className="search1" id="cart">{<FaCartPlus className='search' />}</div>
                    <div className="search1" id="wishlist">{<FaHeart className='search' />}</div>
                </div>

                <div
                    ref={slidingBarRef}
                    className={`sliding-bar ${isSlidingBarOpen ? 'open' : ''}`}
                    onMouseEnter={toggleSlidingBar}
                    onMouseLeave={closeSlidingBar}
                >
                    <div className="tab" id="Settings">{<IoSettingsSharp className='logo' />}</div>
                    <div className="tab" id="SignUp">{<PiSignInBold className='logo' />}</div>
                    <div className="tab" id="Login">{<FaPowerOff className='logo' />}</div>
                </div>

                <div className="horizontal-line"></div>
            </div>
        </div>
    );
};


export default Home;
