import React from 'react';

const SeedItem = ({ item, quantity, removeFromCart}) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Seed Type: {item.seedType}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {quantity}</p>
            <p>Total: {item.price * quantity}</p>
            <button onClick={() => removeFromCart(item.name)}>Remove</button>
        </div>
    );
};

export default SeedItem;
