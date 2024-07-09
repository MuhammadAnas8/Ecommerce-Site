import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'

import Navbar from './assets/components/Navbar/Navbar'
import './App.css'
import Footer from './assets/components/Footer/Footer'
import Phones from './assets/components/Pages/Phones/Phones'
import Watches from './assets/components/Pages/Watches/Watches'
import Home from './assets/components/Home/Home'
import Laptops from './assets/components/Pages/Laptops/Laptops'
import  Headphones  from './assets/components/Pages/Headphones/Headphones'
import CartPage from './assets/components/Pages/CartPage/CartPage'
import Account from './assets/components/Pages/Account/Account'
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
