import React, { useState } from 'react';
import './SideNavbar.css';

const SideNavbar = () => {
  const [category, setCategory] = useState('Gadget');
  const [price, setPrice] = useState('High to Low');
  const [location, setLocation] = useState('Nearest');
  const [rating, setRating] = useState('Highest');
  const [shipping, setShipping] = useState('Regular');
  const [city, setCity] = useState('Pune');

  return (
    <div className="category-filter">
      <h3>Category</h3>
      <ul>
        {['Living', 'Gadget', 'Electronics', 'Fashion'].map((cat) => (
          <li key={cat}>
            <label>
              <input 
                type="radio" 
                name="category" 
                value={cat} 
                checked={category === cat} 
                onChange={() => setCategory(cat)} 
              />
              {cat}
            </label>
          </li>
        ))}
      </ul>

      <h3>Price</h3>
      <ul>
        {['High to Low', 'Low to High'].map((priceOption) => (
          <li key={priceOption}>
            <label>
              <input 
                type="radio" 
                name="price" 
                value={priceOption} 
                checked={price === priceOption} 
                onChange={() => setPrice(priceOption)} 
              />
              {priceOption}
            </label>
          </li>
        ))}
      </ul>

      <h3>Location</h3>
      <ul>
        {['Nearest', 'Farthest'].map((loc) => (
          <li key={loc}>
            <label>
              <input 
                type="radio" 
                name="location" 
                value={loc} 
                checked={location === loc} 
                onChange={() => setLocation(loc)} 
              />
              {loc}
            </label>
          </li>
        ))}
      </ul>

      <h3>Rating</h3>
      <ul>
        {['Highest', 'Lowest'].map((rate) => (
          <li key={rate}>
            <label>
              <input 
                type="radio" 
                name="rating" 
                value={rate} 
                checked={rating === rate} 
                onChange={() => setRating(rate)} 
              />
              {rate}
            </label>
          </li>
        ))}
      </ul>

      <h3>Shipping</h3>
      <ul>
        {['Regular', 'Next day', 'Same day'].map((ship) => (
          <li key={ship}>
            <label>
              <input 
                type="radio" 
                name="shipping" 
                value={ship} 
                checked={shipping === ship} 
                onChange={() => setShipping(ship)} 
              />
              {ship}
            </label>
          </li>
        ))}
      </ul>

      <h3>City</h3>
      <ul>
        {['Pune', 'Mumbai', 'Nashik'].map((cityOption) => (
          <li key={cityOption}>
            <label>
              <input 
                type="radio" 
                name="city" 
                value={cityOption} 
                checked={city === cityOption} 
                onChange={() => setCity(cityOption)} 
              />
              {cityOption}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;
