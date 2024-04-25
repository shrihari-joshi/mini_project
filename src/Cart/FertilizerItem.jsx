import React from 'react';

const FertilizerItem = ({ item , quantity, removeFromCart}) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Quantity: {quantity}</p>
            <p>Total : {item.price * quantity}</p>
            <p>Discription: {item.discription}</p>
            <button onClick={() => removeFromCart(item.name)}>Remove</button>
        </div>
    );
};
    
export default FertilizerItem;
