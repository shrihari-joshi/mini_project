import Navbar from '../Navbar/Navbar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from '../Home/Home';

const Seeds = () => {
    const [seeds, setSeeds] = useState([]);
    const [cart, setCart] = useState([])
    const userData = localStorage.getItem('currentUser')
    const user = userData ? JSON.parse(userData) : null
    // const navigate = useNavigate()

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
        fetchSeeds()
    }, []); // Dependency on seeds state

        
    const addToCart = async (seed) => {
        try {
            const response = await axios.post('http://localhost:3500/addToCart', {
                username : user.username,
                name : seed.name,
                type : seed.type
            })
            console.log(`${response.data} added to cart`);
            // navigate('/cart')
        }
        catch (error){
            console.log(error);
        }
    }
    const buySeeds = async (seed) => {
        try {
            console.log('Buying seed with ID:', seed.name);
        } catch (error) {
            console.error('Error buying seed:', error);
        }
    };

    return (
        <div style={{marginLeft : "300px"}}>
            
            <div className='mainbase'>
                <p className='base'>
                    Welcome
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
                            <button onClick={() => addToCart(seed)}>Add To Cart</button> 
                            <button onClick={() => buySeeds(seed)}>Buy</button>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default Seeds;
