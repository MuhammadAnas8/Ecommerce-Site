import React from 'react'
import Header from '../../Common/Header/Header'
import ProductList from '../../Common/ProductList/ProductList'
import { HeadphonesProducts,HeadphonesProductsNewArrival } from '../../Data/HeadphonesProducts'
import PageHeader from '../Common/PageHeader/PageHeader'


function Headphones() {
  return (
    <div className=''>
      <PageHeader PageName={'Headphones'} />
      <Header heading="HEADPHONES" subHeading="NEW ARRIVALS" />
      <ProductList products={HeadphonesProductsNewArrival} />
      <Header heading="ALL PRODUCTS" subHeading="HEADPHONES" />
      <ProductList products={HeadphonesProducts} />
      
    </div>
  )
}

export default Headphones
