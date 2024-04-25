import React, { useState } from 'react';
import Fertilizer from './Fertilizer/Fertilizers/Fertilizers';
import Pesticide from './Pesticide/Pesticides/Pesticides';
import './Plant_Nutrition.css';
const Plant_Nutrition = () => {
    const [tab, setTab] = useState('fertilizer');

    const toggleTab = () => {
        setTab(tab === 'fertilizer' ? 'pesticide' : 'fertilizer');
    };

    return (
        <div className='butcontain'>
            <div className='present'>
                {tab === 'fertilizer' ? <Fertilizer /> : <Pesticide />}
            </div>
            <div>
                <button className='plantbut' onClick={toggleTab}>Fertilizers</button>
                <button className='plantbut' onClick={toggleTab}>Pesticides</button>
            </div>
        </div>
    );
};

export default Plant_Nutrition;
