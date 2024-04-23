import React, { useState } from 'react';
import './Seed.css'; // Import CSS file

const SeedProduct = ({ seed, addToCart, addToWishList, handleConfirmAddress }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [addressConfirmed, setAddressConfirmed] = useState(true);

    const handleQuantityChange = (e) => {
        setSelectedQuantity(Number(e.target.value));
    };
    
    return (
        <div className="seed-container">
            <h3 className="seed-name">{seed.name}</h3>
            <p className="seed-type">Type: {seed.type}</p>
            <p className="seed-price">Price: {seed.price}</p>
            <p className="seed-total">Total Price: {seed.price * selectedQuantity}</p>
            <p className="seed-distributor">
                Distributed by: {seed.distributer ? seed.distributer : ' No distributor added'}
            </p>
            <input
                type="number"
                min="1"
                value={selectedQuantity}
                onChange={handleQuantityChange}
                className="seed-quantity"
            />
            <button onClick={() => addToCart(seed, selectedQuantity)} className="seed-btn">Add To Cart</button>
            {/* <button onClick={() => buySeeds(seed)} className="seed-btn">Buy</button> */}
            <button onClick={() => addToWishList(seed)} className="seed-btn">Add to Wishlist</button>
            {/* <button onClick={buySeeds} className="seed-btn">Buy</button> */}
        </div>
    );
};

export default SeedProduct;