import React, { useEffect, useState } from 'react'
import './CartItem.css'
function CartItem({ CartProducts, onTotalChange }) {
    const [quantities, setQuantities] = useState(
        CartProducts.reduce((acc, item) => {
          acc[item.id] = 0;
          return acc;
        }, {})
      );
    
      const handleIncrease = (id) => {
        setQuantities((prevQuantities) => {
          return { ...prevQuantities, [id]: prevQuantities[id] + 1 };
        });
      };
    
      const handleDecrease = (id) => {
        setQuantities((prevQuantities) => {
          return { ...prevQuantities, [id]: prevQuantities[id] > 0 ? prevQuantities[id] - 1 : 0 };
        });
      };
    
      useEffect(() => {
        const updateTotal = (newQuantities) => {
          let total = CartProducts.reduce((acc, item) => {
            acc += item.price * newQuantities[item.id];
            return acc;
          }, 0);
          onTotalChange(total);
        };
    
        updateTotal(quantities);
      }, [quantities, CartProducts, onTotalChange]);

  return (
    <div >
      {CartProducts.map((item) => (
        <div className="cart-item" key={item.id}>
            <div className="cart-item-detail">
          <img src={item.image} alt={item.name} />
          <h4>{item.title}</h4>                
            </div>
          <div className="quantity-control">
            <button className="btn" onClick={() => handleDecrease(item.id)}>
              -
            </button>
            <span>{quantities[item.id]}</span>
            <button className="btn" onClick={() => handleIncrease(item.id)}>
              +
            </button>
          </div>
          <h3>${(item.price * quantities[item.id]).toFixed(2)}</h3>
        </div>
      ))}
    </div>
  )
}

export default CartItem
