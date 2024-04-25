import React, { useState } from 'react';
import Fertilizer from './Fertilizer/Fertilizers';
import Pesticide from './Pesticide/Pesticides';

const Plant_Nutrition = () => {
    const [tab, setTab] = useState('fertilizer');

    const toggleTab = () => {
        setTab(tab === 'fertilizer' ? 'pesticide' : 'fertilizer');
    };

    return (
        <div>
            <h2>Plant Nutrition</h2>
            <button onClick={toggleTab}>Fertilizers</button>
            <button onClick={toggleTab}>Pesticides</button>
            {tab === 'fertilizer' ? <Fertilizer /> : <Pesticide />}
        </div>
    );
};

export default Plant_Nutrition;
