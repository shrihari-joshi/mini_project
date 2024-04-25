import React from 'react';

const FertilizerItem = ({ item , quantity}) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Discription: {item.discription}</p>
        </div>
    );
};
    
export default FertilizerItem;
