import Navbar from '../Navbar/Navbar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from '../Home/Home';
import SeedProduct from './SeedProduct';
import SeedProduct from './SeedProduct';

const Seeds = () => {
    const [seeds, setSeeds] = useState([]);
    const [cart, setCart] = useState([]);
    const userData = localStorage.getItem('currentUser');
    const user = userData ? JSON.parse(userData) : null;
    const [cart, setCart] = useState([]);
    const userData = localStorage.getItem('currentUser');
    const user = userData ? JSON.parse(userData) : null;
    // const navigate = useNavigate()

    const fetchSeeds = async () => {
        try {
        const response = await axios.get('http://localhost:3500/seeds');
        console.log('Data fetched');
        setSeeds(response.data);
        const response = await axios.get('http://localhost:3500/seeds');
        console.log('Data fetched');
        setSeeds(response.data);
        } catch (error) {
        alert(error);
        alert(error);
        }
    };

    useEffect(() => {
        fetchSeeds();
        fetchSeeds();
    }, []); // Dependency on seeds state

    const addToCart = async (seed, quantity) => {
    const addToCart = async (seed, quantity) => {
        try {
        const response = await axios.post('http://localhost:3500/addToCart', {
            username: user.username,
            name: seed.name,
            type: seed.type,
            quantity: quantity,
        });
        console.log(`${response.data} added to cart`);
        // navigate('/cart')
        } catch (error) {
        console.log(error);
        const response = await axios.post('http://localhost:3500/addToCart', {
            username: user.username,
            name: seed.name,
            type: seed.type,
            quantity: quantity,
        });
        console.log(`${response.data} added to cart`);
        // navigate('/cart')
        } catch (error) {
        console.log(error);
        }
    };

    };

    const buySeeds = async (seed) => {
        try {
            console.log('seed braught');
            console.log('seed braught');
        } catch (error) {
        console.error('Error buying seed:', error);
        console.error('Error buying seed:', error);
        }
    };

    // const handleConfirmAddress = async(user) {
    //     if (confirm(user.address)) {
            
    //     }
    // }

    const addToWishList = async (seed) => {
        try {
            const res1 = await axios.post('http://localhost:3500/addToWishlist', {
                username: user.username,
                name: seed.name,
                type: seed.type,
            })
        } catch (err) {
            console.log(err.message);
        }
    }

    // const handleConfirmAddress = async(user) {
    //     if (confirm(user.address)) {
            
    //     }
    // }

    const addToWishList = async (seed) => {
        try {
            const res1 = await axios.post('http://localhost:3500/addToWishlist', {
                username: user.username,
                name: seed.name,
                type: seed.type,
            })
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div style={{ marginLeft: '300px' }}>
        <div className='mainbase'>
            <p className='base'>Welcome to Seeds</p>
        </div>
            <ul>
                {seeds.map((seed, index) => (
                    <li key={index}>
                        <div>
                            <SeedProduct
                                seed={seed}
                                addToCart={addToCart}
                                buySeeds={buySeeds}
                                addToWishList={addToWishList}
                            />
                            
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Seeds;
