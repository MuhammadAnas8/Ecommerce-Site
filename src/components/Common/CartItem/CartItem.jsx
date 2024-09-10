import React, { useEffect, useState } from 'react';
import './CartItem.css';
import { useCart } from '../../../context/CartContext';

function CartItem({ CartProducts, onTotalChange }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  // Update total when quantities change
  useEffect(() => {
    const updateTotal = () => {
      let total = CartProducts.reduce((acc, item) => {
        acc += item.price * item.quantity;
        return acc;
      }, 0);
      onTotalChange(total);
    };

    updateTotal();
  }, [CartProducts, onTotalChange]);

  return (
    <>
      {CartProducts.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="cart-item-detail">
            <img src={item.image} alt={item.name} />
            <h4>{item.title}</h4>
          </div>
          <div className="quantity-control">
            <button className="btn" onClick={() => decreaseQuantity(item.id)}>
              -
            </button>
            <span>{item.quantity}</span>
            <button className="btn" onClick={() => increaseQuantity(item.id)}>
              +
            </button>
          </div>
          <h3>${(item.price * item.quantity).toFixed(2)}</h3>
          <button className="btn" onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </>
  );
}

export default CartItem;
