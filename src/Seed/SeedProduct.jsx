import React, { useState } from 'react';
import './Seed.css'; 

const SeedProduct = ({ seed, addToCart, addToWishList, handleConfirmAddress }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [addressConfirmed, setAddressConfirmed] = useState(false);

    const handleQuantityChange = (e) => {
        setSelectedQuantity(Number(e.target.value));
    };
    
    return (
        <div className="seed-container">
            <h3 className="seed-name">{seed.name}</h3>
            <p className="seed-type"><strong>Type:</strong> {seed.type}</p>
            <p className="seed-price"><strong>Price:</strong> {seed.price}</p>
            <p className="seed-total"><strong>Total Price:</strong> {seed.price * selectedQuantity}</p>
            <p className="seed-distributor">
                <strong>Distributed by:</strong> {seed.distributer ? seed.distributer : ' No distributor added'}
            </p>
            <input
                type="number"
                min="1"
                value={selectedQuantity}
                onChange={handleQuantityChange}
                className="seed-quantity"
            />
            <div className="btn-container">
            <button onClick={() => addToCart(seed, selectedQuantity)} className="seed-btn">Add To Cart</button>
            <button onClick={() => addToWishList(seed)} className="seed-btn">Add to Wishlist</button>
            </div>
        </div>
    );
};

export default SeedProduct;