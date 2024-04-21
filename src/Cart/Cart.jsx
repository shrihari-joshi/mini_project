import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const userData = localStorage.getItem('currentUser');
    const user = userData ? JSON.parse(userData) : null;
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()

    if (!user) {
        navigate('/signup')
    }

    const fetchCart = async () => {
        try {
            setIsLoading(true);
            if (!user) {
                console.error('User data not found in localStorage');
                return;
            }
            setTimeout(async () => {
                const response = await axios.get('http://localhost:3500/getCart', {
                    params : {
                        username: user.username
                    }
                });  
                if (response.data.length > 0) {
                    setCart(response.data);
                }
                let sum = 0;
                cart.forEach((cartItem) => {
                    sum += cartItem.seedPrice * cartItem.quantity;
                });
                setTotal(sum);

                console.log(response);
                // localStorage.setItem('currentUser', JSON.stringify({ ...user, cart : response.data.cart}))
                console.log(response.data);
                setIsLoading(false); // Set loading state to false after data is fetched
            }, 1500); 

        } catch (error) {
            console.error('Error fetching cart:', error.response);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    return (
        <div style={{ marginLeft: "300px" }}>
            <h1>Cart : {user?.username}</h1>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <h2>Total Items : {cart?.length || 0}</h2>
                    <button onClick={fetchCart}>Refresh Cart</button>
                    {cart?.length > 0 ? (
                        <div>
                            {cart.map((cartItem, index) => (
                                <div key={index}>
                                    <p>Name: {cartItem?.seedName}</p>
                                    <p>Type: {cartItem?.seedType}</p>
                                    <p>Price: {cartItem?.seedPrice}</p>
                                    <p>Quantity: {cartItem?.quantity}</p>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No items in cart</p>
                    )}
                </>
            )}
            <h2>Total Price : {total}</h2>
        </div>
    );
};

export default Cart;