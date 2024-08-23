import React from 'react'
import Header from '../../Common/Header/Header'
import ProductList from '../../Common/ProductList/ProductList'
import PageHeader from '../Common/PageHeader/PageHeader'
import AllProducts from '../../Data/AllProducts'

function Watches() {
  const AllWatches = AllProducts.filter(product => product.category === 'watches');
  return (
    <div>
      <PageHeader PageName={'Watches'} />
      <Header heading="ALL PRODUCTS" subHeading="WATCHES" />
      <ProductList products={AllWatches} />
    </div>
  )
}

export default Watches
