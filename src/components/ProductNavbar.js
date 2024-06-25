import React from 'react';


const ProductNavbar = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h4 className="product-name">{product.name}</h4>
      <p className="product-price">{product.price}</p>
      <div className="product-buttons">
        <button className="add-to-cart">Add to cart</button>
        <button className="buy-now">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductNavbar;
