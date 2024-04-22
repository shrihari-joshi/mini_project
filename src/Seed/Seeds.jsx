import Navbar from '../Navbar/Navbar';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../Home/Home';
import SeedProduct from './SeedProduct';

const Seeds = () => {
    const [seeds, setSeeds] = useState([]);
    const [cart, setCart] = useState([]);
    const userData = localStorage.getItem('currentUser');
    const user = userData ? JSON.parse(userData) : null;
    const navigate = useNavigate();

    const notify = (msg) => toast.error(msg, { position: 'bottom-center' });

    const fetchSeeds = async () => {
        try {
            const response = await axios.get('http://localhost:3500/getAllSeeds');
            console.log('Data fetched');
            setSeeds(response.data);
        } catch (error) {
            notify(error.message);
        }
    };

    useEffect(() => {
        fetchSeeds();
    }, []); // Dependency on seeds state

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
        }
    };

    const buySeeds = async (seed) => {
        try {
            console.log('seed bought');
        } catch (error) {
            console.error('Error buying seed:', error);
        }
    };

    const addToWishList = async (seed) => {
        try {
            const res1 = await axios.post('http://localhost:3500/addToWishlist', {
                username: user.username,
                name: seed.name,
                type: seed.type,
            });
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div>
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
            <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={true} />
        </div>
    );
};

export default Seeds;