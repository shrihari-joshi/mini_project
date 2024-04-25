import React from 'react';

const FertilizerItem = ({ item, removeFromWishlist}) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Discription: {item.discription}</p>
            <button onClick={() => removeFromWishlist(item.name, 'fertilizer')}></button>
        </div>
    );
};
    
export default FertilizerItem;
