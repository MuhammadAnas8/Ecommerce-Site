import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ image, title, price, rating }) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(1);
  };

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-details">
        <h5 className='tilte'>{title}</h5>
        {quantity === 0 ? (
          <button className='btn' onClick={handleAddToCart}>Add to Cart</button>
        ) :
         (
          <div className="quantity-control">
            <button className='btn' onClick={handleDecrease}>-</button>
            <span>{quantity}</span>
            <button className='btn' onClick={handleIncrease}>+</button>
          </div>
        )}
        <div className="product-price-rating">
          <div className="price">${price}</div>
          <span className="rating">
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
