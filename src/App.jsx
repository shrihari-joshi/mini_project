import React from 'react'
import { useState } from 'react';
import { Route, Routes,Link } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Register from './Register';
import Crop_Protection from './Crop_Protection';
import Seeds from './Seeds';
import Plant_Nutrition from './Plant_Nutrition';
import Weather_Forecast from './Weather_Forecast';
import Kisan_Care from './Kisan_Care';

function App() {
    const [users, setUsers] = useState(localStorage.getItem('users') || [])
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Define a home route */}
                <Route path="/signup" element={<SignUp
                    users={users}
                    setUsers={setUsers}
                />}/>
                    <Route path="/login" element={<Login
                        users={users}
                    />} />
                    {/* Define a route for Login */}
                    <Route path="/register" element={<Register
                        users={users}
                        setUsers={setUsers}
                    />} />
                <Route path="/seeds" element={<Seeds/>} /> {/* Define a route for Seeds */}
                <Route path="/crop-protection" element={<Crop_Protection />} /> {/* Define a route for Crop Protection */}
                <Route path="/plant-nutrition" element={<Plant_Nutrition />} /> {/* Define a route for Plant Nutrition */}
                <Route path="/weathe-forecast" element={<Weather_Forecast />} /> {/* Define a route for Weather Forecast */}
                <Route path="/kisan-care" element={<Kisan_Care />} /> {/* Define a route for Kisan Care */}
            </Routes>
        </main>
    );
}

export default App;
