import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';

function App() {
    return (
        <div className="App">
            <header className="navbar">
                <div className="search-login">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="tabs">
                    <Navbar/>
                    <button>Login</button>
                </div>
            </header>
            {/* Your page content goes here */}
            <div className="content">
                <h1>Welcome to the Homepage</h1>
                {/* Add more content as needed */}
            </div>
        </div>
    );
}

export default App;
