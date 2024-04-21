import React from 'react';
import './Seeds.css';
import { assets } from '../assets/assets';
// import { assets } from '../assets/assets';

const SeedCard = ({ seed }) => {
  return (
    <div className="seed-card">
      <img src={seed.image} alt={seed.name} />
      <div className="seed-details">
        <h3>{seed.name}</h3>
        <p><strong>Price:</strong> ${seed.price}</p>
        <p>{seed.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

const SeedSellingPage = () => {
  const seeds = [
    { id: 1, name: 'Wheat Seeds', price: 10, description: 'High-quality wheat seeds for your fields.', image: assets.wheat },
    { id: 2, name: 'Corn Seeds', price: 15, description: 'Top-grade corn seeds for a bountiful harvest.', image: assets.corn },
    { id: 3, name: 'Rice Seeds', price: 12, description: 'Premium rice seeds for optimal yield.', image: assets.rice },
    // Add more seeds below'
    { id: 4, name: 'Soybean Seeds', price: 18, description: 'High-yielding soybean seeds for profitable cultivation.', image: assets.soybean },
    { id: 5, name: 'Barley Seeds', price: 14, description: 'Barley seeds for brewing or animal feed.', image: assets.barley },
    { id: 6, name: 'Cotton Seeds', price: 20, description: 'Cotton seeds for high-quality fiber production.', image: assets.cotton },
    { id: 7, name: 'Sunflower Seeds', price: 16, description: 'Sunflower seeds for both oil and edible uses.', image: assets.sunflower },
    { id: 8, name: 'Sorghum Seeds', price: 13, description: 'Sorghum seeds for drought-tolerant crops.', image: assets.sorghum },
    { id: 9, name: 'Millet Seeds', price: 11, description: 'Millet seeds suitable for various climates and soils.', image: assets.millet },
    { id: 10, name: 'Peanut Seeds', price: 17, description: 'Peanut seeds for oil extraction and culinary uses.', image: assets.peanut},
    { id: 11, name: 'Potato Seeds', price: 12, description: 'Potato seeds for planting and harvesting.', image: assets.potato },
    { id: 12, name: 'Tomato Seeds', price: 10, description: 'Tomato seeds for growing in gardens or greenhouses.', image: assets.tomato },
    { id: 13, name: 'Carrot Seeds', price: 8, description: 'Carrot seeds for fresh consumption or storage.', image: assets.carrot },
    { id: 14, name: 'Lettuce Seeds', price: 6, description: 'Lettuce seeds for salads and other culinary uses.', image: assets.lettuce },
    { id: 15, name: 'Spinach Seeds', price: 7, description: 'Spinach seeds for home gardens and commercial farms.', image: assets.spinach },

  ];

  return (
    <div className="seed-selling-page">
      <h1>Our Products</h1>
      <div className="seed-cards">
        {seeds.map(seed => (
          <SeedCard key={seed.id} seed={seed} />
        ))}
      </div>
    </div>
  );
};

export default SeedSellingPage;
