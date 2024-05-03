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
<<<<<<< HEAD:src/components/Plant_Nutrition/Plant_Nutrition.jsx
            <div>

            <button className='plantbut' onClick={() => toggleTab('fertilizer')}>Fertilizers</button>
            <button className='plantbut' onClick={() => toggleTab('pesticide')}>Pesticides</button>
=======
            <div className='something'>
                <button className='plantbut' onClick={toggleTab}>Fertilizers</button>
                <button className='plantbut' onClick={toggleTab}>Pesticides</button>
>>>>>>> c157314d1d727ae742d9ed8eff5d72754e2cb988:src/Plant_Nutrition/Plant_Nutrition.jsx
            </div>

            <div className='present'>
                {tab === 'fertilizer' ? <Fertilizer /> : <Pesticide />}
            </div>
        </div>
    );
};

export default Plant_Nutrition;
