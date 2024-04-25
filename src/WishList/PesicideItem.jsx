import React from 'react';

const PesticideItem = ({ item , quantity}) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Discription: {item.discription}</p>
        </div>
    );
};

export default PesticideItem;
