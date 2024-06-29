import React from 'react'
import Header from '../../Common/Header/Header'
import ProductList from '../../Common/ProductList/ProductList'
import PageHeader from '../Common/PageHeader/PageHeader'
import { WatchesProducts } from '../../Data/WatchesProducts'

function Watches() {
  return (
    <div>
      <PageHeader PageName={'Watches'} />
      <Header heading="ALL PRODUCTS" subHeading="WATCHES" />
      <ProductList products={WatchesProducts} />
    </div>
  )
}

export default Watches
