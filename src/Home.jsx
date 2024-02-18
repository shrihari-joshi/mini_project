import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './navbar.css';


import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";

const Home = () => {
    const [isSlidingBarOpen, setSlidingBarOpen] = useState(false);
    const slidingBarRef = useRef(null);

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
                <div className="toggle-button" onClick={toggleSlidingBar}>
                    ☰
                </div>

                <div>
                    <p className='title'>Kissan Utsav</p>
                    <p className='h1'>Seeds of Change!</p>
                </div>

                <div
                    ref={slidingBarRef}
                    className={`sliding-bar ${isSlidingBarOpen ? 'open' : ''}`}
                    onMouseLeave={closeSlidingBar}
                >
                    <div className="tab" id="cart">{<FaCartPlus />}</div>
                    <div className="tab" id="wishlist">{<FaHeart />}</div>
                    <div className="tab" id="settings">{<IoSettingsSharp />}</div>
                    <div className="tab" id="sign-in">{<PiSignInBold />}</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
