import axios from "axios";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './Payment/Checkout.js'
import Loading from "../Loading";
import FertilizerItem from "./FertilizerItem.jsx";
import SeedItem from "./SeedItem.jsx";
import PesticideItem from "./PesicideItem.jsx";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const userData = localStorage.getItem('currentUser');
    const user = userData ? JSON.parse(userData) : null;
    
    const notifyError = (msg) => toast.error(msg, { position: 'top-center' });
    const notifyWarning = (msg) => toast.warn(msg, { position: 'top-center'})
    const notifySuccess = (msg) => toast.success(msg, { position: 'top-center' });
    // const navigate = useNavigate()
    // if (!user) {
    //     navigate('/signup')
    // }

    const fetchCart = async () => {
        try {
            setIsLoading(true);
            if (!user) {
                console.error('User data not found in localStorage');
                return;
            }
            setIsLoading(true)
            const response = await axios.get('http://localhost:3500/getCart', {
                params: {
                    username: user.username
                }
            });
            setCart(response.data)
            console.log(response);
            if (response.status !== 200) {
                notifyError('Cannot get cart')
            }
            const totalResponse = await axios.get('http://localhost:3500/getCartTotal', {
                params: {
                    username: user.username
                }
            });
            if (totalResponse.status !== 200) {
                notifyError('Cannot get cart total')
            }
            setCartTotal(totalResponse.data)
            setIsLoading(false); // Set loading state to false after data is fetched
        } 
         catch (error) {
            console.error('Error fetching cart:', error.response);
            notifyError('Error in getting cart')
            setIsLoading(false);
        }
    };

    const removeFromCart = async (name) => {
        try {
            await axios.delete('http://localhost:3500/removeFromCart', {
                data : {
                    username: user.username,
                    name : name
                }
            });
            notifySuccess(`${name} removed from cart`)
            fetchCart(); // Refresh cart after removing item
        } catch (error) {
            console.error('Error removing item from cart:', error.response);
            notifyError('Error ' , name , ' while removing from cart')
        }
    };

    const clearCart = async () => {
        try {
            await axios.delete('http://localhost:3500/clearCart', {
                data : {
                    username: user.username
                }
            });
            setCart([])
            notifySuccess('Cart cleared succesfully')
            fetchCart(); // Refresh cart after clearing
        } catch (error) {
            console.error('Error clearing cart:', error.response);
            notifyError('Error while clearing cart')
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <div style={{ marginLeft: "300px" }}>
            {!user ? (
                <h2>Kindly Sign Up to see cart</h2>
            ) : (
                <>
                    <h1>Cart : {user?.username}</h1>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <>
                            <h2>Total Items : {cart?.length || 0}</h2>
                            {cart?.length > 0 ? (
                                <div>
                                    {cart.map((cartItem, index) => (
                                        cartItem.type === 'seed' ? (
                                            <SeedItem key={index} item={cartItem} quantity={cartItem.quantity} removeFromCart={removeFromCart}/>
                                        ) : cartItem.type === 'fertilizer' ? (
                                            <FertilizerItem key={index} item={cartItem} quantity={cartItem.quantity} removeFromCart={removeFromCart}/>
                                        ) : (
                                            <PesticideItem key={index} item={cartItem} quantity={cartItem.quantity} removeFromCart={removeFromCart}/>
                                        )
                                    ))}
                                </div>
                            ) : (
                                <p>No items in cart</p>
                            )}
                        </>
                    )}
                    <h2>Total Price : {cartTotal}</h2>
                    <button onClick={() => clearCart()}>Clear Cart</button>
                    <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar={true} />
                </>
            )}
        </div>
        
    );
    
};

export default Cart;