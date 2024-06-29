import React from 'react'
import Header from '../../Common/Header/Header'
import ProductList from '../../Common/ProductList/ProductList'
import { LaptopsProducts, LaptopsProductsTrending } from '../../Data/LaptopsProducts'
import PageHeader from '../Common/PageHeader/PageHeader'

function Laptops() {
  return (
    <div>
      <PageHeader PageName={'Laptops'} />
      <Header heading="LAPTOPS" subHeading="TRENDING NOW" />
      <ProductList products={LaptopsProductsTrending} />
      <Header heading="ALL PRODUCTS" subHeading="LAPTOPS" />
      <ProductList products={LaptopsProducts} />
    </div>
  )
}

export default Laptops
