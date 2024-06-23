import { useState } from 'react'
import Navbar from './assets/components/Navbar/Navbar'
import Hero from './assets/components/Hero/Hero'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
