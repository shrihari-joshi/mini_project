import Navbar from '../Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../Home/Home';
import './Seeds.jsx';

const Seeds = () => {
    const [seeds, setSeeds] = useState([]);
    const [cart, setCart] = useState([])

    const fetchSeeds = async () => {
        try {
            const response = await axios.get('http://localhost:3500/seeds');
            console.log('Data fetched');
            setSeeds(response.data);
        } catch (error) {
            alert(error)
        }
    };

    useEffect(() => {
        if (seeds.length === 0) {
            fetchSeeds();
        }
    }, [seeds]); // Dependency on seeds state
        
    const addToCart = async () => {
        const updatedCart = [...cart, seeds]
        setCart(updatedCart)
    }
    const buySeeds = async (id) => {
        try {
            console.log('Buying seed with ID:', id);
        } catch (error) {
            console.error('Error buying seed:', error);
        }
    };

    return (
        <div>
            
            <div className='mainbase'>
                <p className='base'>
                    Welcome to seeds
                </p>
            </div>
            <ul>
                {seeds.map((seed, index) => (
                    <li key={index}>
                        <div>
                            <h3>{seed.name}</h3>
                            <p>Type: {seed.type}</p>
                            <p>Date Added: {new Date(seed.date).toLocaleDateString()}</p>
                            {/* you have to put icon for add to cart */}
                            <button onClick={addToCart}>Add To Cart</button> 
                            <button onClick={() => buySeeds(seed.id)}>Buy</button>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default Seeds;
