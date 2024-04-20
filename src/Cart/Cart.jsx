import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../Loading";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const userData = localStorage.getItem('currentUser');
    const user = userData ? JSON.parse(userData) : null;

    const fetchCart = async () => {
        try {
            setIsLoading(true); // Set loading state to true
            if (!user) {
                console.error('User data not found in localStorage');
                return;
            }
            console.log(`${user.username} logged in in front end`);

            setTimeout(async () => {
                const response = await axios.get('http://localhost:3500/getCart', {
                    params : {
                        username: user.username
                    }
                }); 
                setCart(response.data.cart);
                localStorage.setItem('currentUser', JSON.stringify({ ...user, cart : response.data.cart}))
                console.log(response.data.cart);
                setIsLoading(false); // Set loading state to false after data is fetched
            }, 1500); 
    
        } catch (error) {
            console.error('Error fetching cart:', error.response);
            setIsLoading(false); // Set loading state to false if there's an error
        }
    };
    
    
    useEffect(() => {
        fetchCart()
    }, [])

    return (
        <div style={{marginLeft : "300px"}}>
            <h1>Cart : {user.username}</h1>
            <h2>Total Items : {user.cart.length}</h2>
            <button onClick={() => fetchCart()}>Refresh Cart</button>
            {isLoading ? <Loading /> : (
                <>
                    {cart.length > 0 ? (
                        <div>
                            {cart.map((item, index) => (
                                <div key={index}>
                                    <p>Name: {item.name}</p>
                                    <p>Type: {item.type}</p>
                                    <p>Date: {item.date}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No items in cart</p>
                    )}
                </>
            )}
        </div>
    );
    
}

export default Cart;
