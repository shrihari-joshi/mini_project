import React, { useState } from 'react';
import './Seed.css'; // Import CSS file
import Payment from './Payment';

const SeedProduct = ({ seed, addToCart, buySeeds, addToWishList, handleConfirmAddress }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [addressConfirmed, setAddressConfirmed] = useState(false);

    const handleQuantityChange = (e) => {
        setSelectedQuantity(Number(e.target.value));
    };
    
    return (
        <div className="seed-container">
            <h3 className="seed-name">{seed.seedName}</h3>
            <p className="seed-type">Type: {seed.type}</p>
            <p className="seed-date">Date Added: {new Date(seed.date).toLocaleDateString()}</p>
            <p className="seed-price">Price: {seed.price}</p>
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
            {addressConfirmed ? (
                <Payment
                    seed={seed}
                    quantity={selectedQuantity}
                />
            ) : (
                <button onClick={handleConfirmAddress} className="seed-btn">Confirm Address</button>
            )}
            <button onClick={buySeeds} className="seed-btn">Buy</button>
        </div>
    );
};

export default SeedProduct;
