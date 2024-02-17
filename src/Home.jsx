import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="content">
            <header>
                <h1>Home</h1>
                <nav>
                    <Navbar />
                </nav>
            </header>
        </div>
    );
};

export default Home;
