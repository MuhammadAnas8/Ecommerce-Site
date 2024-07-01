import React, { useState } from 'react'
import './CartItem.css'
function CartItem({ CartProducts }) {
    const [quantities, setQuantities] = useState(
        CartProducts.reduce((acc, item) => {
          acc[item.id] = 1;
          return acc;
        }, {})
      );
    
      const handleIncrease = (id) => {
        setQuantities((prevQuantities) => ({
          ...prevQuantities,
          [id]: prevQuantities[id] + 1,
        }));
      };
    
      const handleDecrease = (id) => {
        setQuantities((prevQuantities) => ({
          ...prevQuantities,
          [id]: prevQuantities[id] > 0 ? prevQuantities[id] - 1 : 0,
        }));
      };

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
          <h3>${item.price}</h3>
        </div>
      ))}
    </div>
  )
}

export default CartItem
