import React from 'react';


const Catalog = ({ products }) => {
  return (
    <div className="product-catalog">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price}</p>
          <div className="product-buttons">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
