import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import './App.css'
import Footer from './components/Footer/Footer'
import Phones from './components/Pages/Phones/Phones'
import Watches from './components/Pages/Watches/Watches'
import Home from './components/Pages/Home/Home'
import Laptops from './components/Pages/Laptops/Laptops'
import  Headphones  from './components/Pages/Headphones/Headphones'
import CartPage from './components/Pages/CartPage/CartPage'
import Account from './components/Pages/Account/Account'
function App() {
  const location = useLocation();
  const showNavbar = location.pathname === '/cart' ||  location.pathname === '/account';
  return (
    <>

      <div>
        {!showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </div>
   

    </>
  )
}

export default App
