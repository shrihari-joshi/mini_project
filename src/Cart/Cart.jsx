import axios from "axios";
import { useState, useEffect } from "react";
import './Cart.css'

const Cart = () => {
    const [cart, setCart] = useState([]);
    const userData = localStorage.getItem('currentUser');
    const user = userData ? JSON.parse(userData) : null;

    const fetchCart = async () => {
        try {
            if (!user) {
                console.error('User data not found in localStorage');
                return;
            }
            console.log(`${user.username} logged in in front end`);
            const response = await axios.post('http://localhost:3500/cart', {
                username: user.username
            }); 
            setCart(response.data.cart);
            console.log(response.data.cart);
        } catch (error) {
            console.error('Error fetching cart:', error.response);
        }
    };


    return (
        <div className="mainbase">

        <div className="base">
            <h1>Cart</h1>
            <button onClick={() => fetchCart()}>Refresh Cart</button>
            {cart.length > 0 ? (
                <div>
                    {cart.map((item, index) => (
                        <div key={index}>
                            <p>Name: {item.name}</p>
                            <p>Type: {item.type}</p>
                            <p>Date: {item.date}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No items in cart</p>
            )}
        </div>

        </div>
        
    );
}

export default Cart;
