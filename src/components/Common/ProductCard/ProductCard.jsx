import React, { useState } from 'react';
import './ProductCard.css';
import { useCart } from '../../../context/CartContext';

function ProductCard({ id, image, title, price, rating}) {

  const { addToCart, increaseQuantity, decreaseQuantity,removeFromCart, cart } = useCart();

  //check if current product is already in cart if yes set productQuantity to quantity added else 0
  const cartItem = cart.find(item => item.id === id);
  const productQuantity = cartItem ? cartItem.quantity : 0;

  // This handle Add to cart button by calling addToCart method from cartContext
  const handleAddToCart = () => {
    addToCart({ id, image, title, price, rating });
  };

  // This handle quantity increase button by calling increaseQuantity method from cartContext
  const handleIncrease = () => {
    increaseQuantity(id);
  };

  // This handle quantity decrease button by calling decreaseQuantity and removeFromCart method from cartContext
  const handleDecrease = () => {
    if (productQuantity > 1) {
      decreaseQuantity(id);
    } else if (productQuantity === 1) {
      removeFromCart(id);
    }
  };


  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-details">
        <h5 className='title'>{title}</h5>
        {productQuantity === 0 ? (
          <button className='btn' onClick={handleAddToCart}>Add to Cart</button>
        ) : (
          <div className="quantity-control">
            <button className='btn' onClick={handleDecrease}>-</button>
            <span>{productQuantity}</span>
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
