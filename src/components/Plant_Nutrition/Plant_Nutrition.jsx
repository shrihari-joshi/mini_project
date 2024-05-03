import React, { useState } from 'react';
import Fertilizer from './Fertilizer/Fertilizers/Fertilizers';
import Pesticide from './Pesticide/Pesticides/Pesticides';
import './Plant_Nutrition.css';

const Plant_Nutrition = () => {
    const [tab, setTab] = useState('fertilizer');

    const toggleTab = (page) => {
        setTab(page);
    };

    return (
        <div className='butcontain'>
            <div className='something'>
                <button className='plantbut' onClick={() => toggleTab('fertilizer')}>Fertilizers</button>
                <button className='plantbut' onClick={() => toggleTab('pesticide')}>Pesticides</button>
            </div>

            <div className='present'>
                {tab === 'fertilizer' ? <Fertilizer /> : <Pesticide />}
            </div>
        </div>
    );
};

export default Plant_Nutrition;
