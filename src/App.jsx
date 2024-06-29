import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './assets/components/Navbar/Navbar'
import './App.css'
import Footer from './assets/components/Footer/Footer'
import Phones from './assets/components/Pages/Phones/Phones'
import Watches from './assets/components/Pages/Watches/Watches'
import Home from './assets/components/Home/Home'
import Laptops from './assets/components/Pages/Laptops/Laptops'
import  Headphones  from './assets/components/Pages/Headphones/Headphones'
function App() {
  return (
    <>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/laptops" element={<Laptops />} />
        </Routes>
        <Footer />
      </div>
    </Router>

    </>
  )
}

export default App
