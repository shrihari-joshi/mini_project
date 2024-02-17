import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <header>
                
                <nav className='body'>
                    <Navbar/>
                </nav>
                {/* <h1>Welcome to Urban-Utsav</h1> */}
            </header>
        </div>
    );
};

export default Home;
