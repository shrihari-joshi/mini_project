import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const formatResponse = (response) => {
    const paragraphs = response.split("\n\n");
    
    return paragraphs.map((paragraph, index) => {
        const lines = paragraph.split("**");
        return (
            <div key={index}>
            {lines.map((line, idx) => {
                if (idx % 2 === 0) {
                return (
                    <p key={idx} className="normal">
                        {line}
                    </p>
                );
                } else {
                const numberedLines = line.split(/\*\*(\d+)\. /).filter(Boolean);
                return (
                    <ol key={idx} className="numbered">
                        {numberedLines.map((numberedLine, index) => (
                            <li key={index}>{numberedLine}</li>
                        ))}
                    </ol>
                );
                }
            })}
            </div>
        );
    });
};

const WeatherForecast = () => {
    const [seedName, setSeedName] = useState('');
    const [date, setDate] = useState('');
    const [soilType, setSoilType] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('currentUser'));
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:3500/weatherResponse', {
                seedName: seedName,
                date: date,
                location: user.location ,
                type: user.soilType || soilType
            });
            setResult(response.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {
                !user ? 
                    <h2>Kindly login to use this feature</h2>
                : (
                    <>
                        <h2>Weather Forecast</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="seedName">Seed Name:</label>
                                <input
                                    type="text"
                                    id="seedName"
                                    value={seedName}
                                    onChange={(e) => setSeedName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="date">Date:</label>
                                <input
                                    type="date"
                                    id="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                            <div>
                                <p>Get the solution for another soil type other than {user.soilType}</p>
                                <label htmlFor="soilType">Soil Type:</label>
                                <select
                                    id="soilType"
                                    value={soilType}
                                    onChange={(e) => setSoilType(e.target.value)}
                                >
                                    <option value="">Select Soil Type</option>
                                    <option value="Alluvial">Alluvial</option>
                                    <option value="Black">Black</option>
                                    <option value="Red and Yellow">Red and Yello</option>
                                    <option value="Laterite">Laterite</option>
                                    <option value="Arid">Arid</option>
                                    <option value="Forest and Mountain">Forest and Mountain</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <button type="submit">Generate Solution</button>
                        </form>
                        {loading && <p>Generating content...</p>}
                        {result && <p>{formatResponse(result)}</p>}
                        {error && <p>{error}</p>}
                    </>
                )
            }
        </div>
    );
};

export default WeatherForecast;
