import React from 'react'
import AccountCircleRounded from '@mui/icons-material/AccountCircleRounded';
import Cart from '@mui/icons-material/ShoppingCartOutlined';
import Search from '@mui/icons-material/SearchOutlined';
import './Navbar.css'

function Navbar() {
  return (
      <nav>
        <span className="brand">
          <h3>GadgetMela</h3>
          </span>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Headphones">Headphones</a>
          </li>
          <li>
            <a href="#Watches">Watches</a>
          </li>
          <li>
            <a href="#Speaker">Speaker</a>
          </li>
          <li>
            <a href="#Phones">Phones</a>
          </li>
        </ul>
        
      <div className="search-container">
       <input type="text" className="search-input" placeholder="Search..." />
        <Search  className='search-icon' />
    </div>

        <div className="icons">
         <Cart className='icon' sx={{ fontSize: 32 }}/>
         <AccountCircleRounded className='icon' sx={{ fontSize: 32 }} />
        </div>
      </nav>
  )
}

export default Navbar
