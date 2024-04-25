import React from 'react';

const SeedItem = ({ item, removeFromWishlist }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Seed Type: {item.seedType}</p>
            <p>Price: {item.price}</p>
            <button onClick={() => removeFromWishlist(item.name, 'seed')}></button>
        </div>
    );
};

export default SeedItem;
