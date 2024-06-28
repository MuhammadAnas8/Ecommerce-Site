import React from 'react'
import Hero from '../Hero/Hero'
import Header from '../Common/Header/Header'
import ProductList from '../Common/ProductList/ProductList'
import NewArrivals from '../NewArrivals/NewArrivals'
import BrowseCategories from '../BrowseCategories/BrowseCategories'
import Footer from '../Footer/Footer'
import { BestSellingProducts } from '../Data/BestSellling'
import { FlashSaleProducts } from '../Data/FlashSale'

function Home() {
  return (
    <div>
      <Hero />
      <Header heading="OFFERS" subHeading="FLASH SALES"/>
      <ProductList products={FlashSaleProducts} />
      <Header heading="THIS MONTH's" subHeading="BEST SELLING PRODUCTS"/>
      <ProductList products={BestSellingProducts} />
      <Header heading="FEATURE" subHeading={"NEW ARRIVALS"} />
      <NewArrivals />
      <Header heading="WANT MORE?" subHeading="BROWSE CATEGORIES" />
      <BrowseCategories />
    </div>
  )
}

export default Home
