import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './navbar.css';
const Home = () => {
    

    return (
        <div className='container'>

                <div className='left'>
                    <Navbar/>
                </div>
                
                <div className='right body'>
                    <div>
                        <p className='title'>Kissan Utsav</p>
                        <p className='h1'>Cultivating Connection, Connecting Lives!</p> 
                    </div>
                        
                    <div className='image'>
                        <p>
                            Ithe Image yeil
                        </p>
                    </div>

                </div>
        </div>
    );
};

export default Home;
