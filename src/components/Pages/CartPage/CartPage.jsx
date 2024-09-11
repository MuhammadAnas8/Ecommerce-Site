import React, { useState } from 'react'
import './CartPage.css'
import { Link } from 'react-router-dom'
import CartItem from '../../Common/CartItem/CartItem';
import { useCart } from '../../../context/CartContext';

const shipping = 25.49;


function CartPage() {
  const { cart, cartItemCount } = useCart();
  const [total, setTotal] = useState(0);

  const handleTotalChange = (newTotal) => {
    setTotal(newTotal);
  };
  return (
    <div className='cart-page'>
         <Link className='cart-link' to="/home"><i className="fas fa-angle-left"></i><strong>Continue Shopping</strong></Link><span>..{cartItemCount()}</span>
         <div className="cart-container">
          <div className="cart-items">
         <h3> Shopping Cart</h3>
         <div className="cart-items-list">
         <CartItem CartProducts={cart} onTotalChange={handleTotalChange}  />
         </div>
          </div>

        <div className="card-details">
          <strong>Card Details</strong>
          <div className="payment-imgs">
            <img src="https://w7.pngwing.com/pngs/223/258/png-transparent-visa-electron-credit-card-computer-icons-visa-text-logo-payment-thumbnail.png" alt="Visa" />
            <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-marcus-samuelsson-group-2.png" alt="Master Card" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/PayPal_Logo2014.png" alt="Paypal" />
            <img src="https://w7.pngwing.com/pngs/343/18/png-transparent-payoneer-payment-logo-business-bank-mastercard-company-text-trademark.png" alt="Payoneer" />
          </div>
          <form action="#">
          <label htmlFor="name">
            Name
            <input type="text" />
          </label>
          <label htmlFor="number">Card Number
            <input type="tel" name="number" id="number" />
          </label>
          <div className="cvv-expiry-container">
      <label className="cvv" htmlFor="cvv">CVV
        <input type="tel" name="cvv" id="cvv" maxLength={3} minLength={3} />
      </label>
      <label className="expiry" htmlFor="expiry">Expiry
        <input type="date" name="expiry" id="expiry" />
      </label>
    </div>
          </form>
    <div className="bill">
      <span>Subtotal</span>
      <span>${total.toFixed(2)}</span>
    </div>
    <div className="bill">
    <span>Shipping</span>
    <span>{total && "$" + shipping}</span>
    </div>
    <div className="bill">
    <span>Total(tax incl.)</span>
    <span>{ total && `$${(total + shipping).toFixed(2)}`}</span>
    </div>

        </div>
         </div>
    </div>

)
}

export default CartPage
