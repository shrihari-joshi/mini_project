import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Seeds = () => {
    const [seeds, setSeeds] = useState([]);
    
    useEffect(() => {
        fetchSeeds();
    }, [seeds]);

    const fetchSeeds = async () => {
        try {
            const response = await axios.get('http://localhost:3500/seeds');
            console.log('Data fetched');
            setSeeds(response.data);
        } catch (error) {
            console.error('Error fetching seeds:', error);
        }
    };

    const handleBuySeed = async (id) => {
        try {
            console.log('Buying seed with ID:', id);
        } catch (error) {
            console.error('Error buying seed:', error);
        }
    };

    return (
        <div>
            <h2>Available Seeds</h2>
            {/* < Navbar /> */}
            <ul>
                {seeds.map(seed => (
                    <li key={seed.id}>
                        <div>
                            <h3>{seed.name}</h3>
                            <p>Type: {seed.type}</p>
                            <p>Date Added: {new Date(seed.date).toLocaleDateString()}</p>
                            <button onClick={() => handleBuySeed(seed.id)}>Buy</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Seeds;
