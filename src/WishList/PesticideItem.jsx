import React from 'react';

const PesticideItem = ({ item , removeFromWishlist}) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Discription: {item.discription}</p>
            <button onClick={() => removeFromWishlist(item.name, 'pesticide')}></button>
        </div>
    );
};

export default PesticideItem;
