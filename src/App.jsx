import React from 'react';
import { Route, Routes,Link } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import Crop_Protection from './Crop_Protection';
import Seeds from './Seeds';
import Plant_Nutrition from './Plant_Nutrition';
import Weather_Forecast from './Weather_Forecast';
import Kisan_Care from './Kisan_Care';
import './navbar.css'

function App() {
    return (
        <main>
            <Routes >
                <Route path="/" element={<Home />} /> {/* Define a home route */}
                <Route path="/login" element={<Login />} /> {/* Define a route for Login */}
                <Route path="/register" element={<Register />} /> {/* Define a route for Register */}
                <Route path="/seeds" element={<Seeds/>} /> {/* Define a route for Register */}
                <Route path="/crop-protection" element={<Crop_Protection />} /> {/* Define a route for Register */}
                <Route path="/plant-nutrition" element={<Plant_Nutrition />} /> {/* Define a route for Register */}
                <Route path="/weathe-forecast" element={<Weather_Forecast />} /> {/* Define a route for Register */}
                <Route path="/kisan-care" element={<Kisan_Care />} /> {/* Define a route for Register */}
            </Routes>
        </main>
    );
}

export default App;
