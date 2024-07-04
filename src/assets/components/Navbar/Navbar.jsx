import React, { useState } from 'react'
import AccountCircleRounded from '@mui/icons-material/AccountCircleRounded';
import Cart from '@mui/icons-material/ShoppingCartOutlined';
import Search from '@mui/icons-material/SearchOutlined';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
      <nav>
        <span className="brand">
          <h3>GadgetMela</h3>
          </span>
        <ul>
        <li>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/phones" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Phones
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/watches" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Watches
          </NavLink>
          <NavLink 
            to="/laptops" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Laptops
          </NavLink>
          <NavLink 
            to="/headphones" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Headphones
          </NavLink>
        </li>
        </ul>
        
      <div className="search-container">
       <input type="text" className="search-input" placeholder="Search..." />
        <Search  className='search-icon' />
    </div>

        <div className="icons">
        <NavLink to="/cart" className="cart-btn">
         <Cart className='icon' sx={{ fontSize: 32 }}/>
        </NavLink>
         <AccountCircleRounded onClick={handleShow} className='icon' sx={{ fontSize: 32 }} />
        </div>
        <Login show={showModal} handleClose={handleClose} />
      </nav>
  )
}

export default Navbar
