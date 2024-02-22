import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Home';

const Seeds = () => {
    const [seeds, setSeeds] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetchSeeds();
    }, [seeds]);

    const fetchSeeds = async () => {
        try {
            const response = await axios.get('http://localhost:3500/seeds');
            console.log('Data fetched');
            setSeeds(response.data);
        } catch (error) {
            alert(error)
        }
    };

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
            
            < Home />
            <ul>
                {seeds.map(seed => (
                    <li key={seed.id}>
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
