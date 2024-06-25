import React from 'react';
import './BasicInfo.css';
import appleLogo from '../assets/Apple_Store_logo.svg.png'; 

const BasicInfo = () => {
  return (
    <div className="store-info">
      <div className="header">
        <img src={appleLogo} alt="Apple Logo" className="store-logo" />
        <h2>Apple Official Store</h2>
      </div>
      <div className="info-grid">
        <div className="info-col">
          <button className="follow">Follow</button>
          <button>Chat</button>
          <button>Shop Info</button>
        </div>
        <div className="info-col">
          <p>Product: 560</p>
          <p>Followers: 435k</p>
          <p>Original Products</p>
          <p>@appleofficial</p>
        </div>
        <div className="info-col">
          <p>Location: Mumbai, India</p>
          <p>Rating: 4.9</p>
          <p>Safe Packaging</p>
          <p>applesupport@gmail.com</p>
        </div>
        <div className="info-col">
          <p>Chat Performance: 78%</p>
          <p>Joined: 12/02/2011</p>
          <p>Free Shipping</p>
          <p>(800) 456-2345</p>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
