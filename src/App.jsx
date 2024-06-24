import { useState } from 'react'
import Navbar from './assets/components/Navbar/Navbar'
import Hero from './assets/components/Hero/Hero'
import Header from './assets/components/Common/Header/Header'
import './App.css'
import ProductList from './assets/components/Common/ProductList/ProductList'
import { FlashSaleProducts } from './assets/components/Data/FlashSale'
import { BestSellingProducts } from './assets/components/Data/BestSellling'
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Header heading="OFFERS" subHeading="FLASH SALES"/>
      <ProductList products={FlashSaleProducts} />
      <Header heading="THIS MONTH's" subHeading="BEST SELLING PRODUCTS"/>
      <ProductList products={BestSellingProducts} />
      
    </>
  )
}

export default App
