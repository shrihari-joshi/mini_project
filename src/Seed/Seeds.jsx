import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../Home/Home';
import SeedProduct from './SeedProduct';
import { assets } from '../assets/assets';
import SeedSellingPage from './SeedSellingPage';

const Seeds = () => {
    const [seeds, setSeeds] = useState([]);
    const userData = localStorage.getItem('currentUser');
    const user = userData ? JSON.parse(userData) : null;
    // const navigate = useNavigate();

    const notifyError = (msg) => toast.error(msg, { position: 'top-center' });
    const notifySuccess = (msg) => toast.success(msg, { position: 'top-center' });

    const fetchSeeds = async () => {
        try {
            const response = await axios.get('http://localhost:3500/getAllSeeds');
            console.log(response.data);
            setSeeds(response.data);
        } catch (error) {
            notifyError(error.message);
        }
    };

    useEffect(() => {
        fetchSeeds();
    }, []);

    const addToCart = async (seed, quantity) => {
        try {
            const response = await axios.post('http://localhost:3500/addToCart', {
                username: user.username,
                name: seed.name,
                type: seed.type,
                quantity: quantity,
            });
            if (response.data.length === 0) {
                <h1>Cart is empty</h1>
            }
            console.log(`${response.data} added to cart`);
            notifySuccess(`${seed.name} added to cart successfully`);
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
                name: seed.name
            });
            notifySuccess(`${seed.name} added to wishlist successfully`);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div>
            {/* <div className='mainbase'>
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
            <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} /> */}
            {/* <div className="main">
                <div className="card">
                    <img src={assets.wheat} alt="Wheat" />
                    <h4>Lokwan Wheat</h4>
                    <p>₹45</p>
                    
                </div>
            </div> */}
            <SeedSellingPage/>
        </div>
    );
};

export default Seeds;
