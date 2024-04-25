import React, { useState } from 'react';

const PesticideItem = ({ pesticide, addToCart, addToWishList }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setSelectedQuantity(Number(e.target.value));
    };
    
    return (
        <div className="pesticide-container">
            <h3 className="pesticide-name">{pesticide.name}</h3>
            <p className="pesticide-price">Price: {pesticide.price}</p>
            <p className="pesticide-desc">{pesticide.disc}</p>
            <p className="pesticide-weight">Weight: {pesticide.weight}</p>
            <input
                type="number"
                min="1"
                value={selectedQuantity}
                onChange={handleQuantityChange}
                className="pesticide-quantity"
            />
            <button onClick={() => addToCart(pesticide, selectedQuantity)} className="pesticide-btn">Add To Cart</button>
            <button onClick={() => addToWishList(pesticide)} className="pesticide-btn">Add to Wishlist</button>
        </div>
    );
};

export default PesticideItem;
