import React from 'react';

const SeedItem = ({ item, quantity}) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Seed Type: {item.seedType}</p>
            <p>Price: {item.price}</p>
        </div>
    );
};

export default SeedItem;
