import React from 'react'
import Header from '../../Common/Header/Header'
import ProductList from '../../Common/ProductList/ProductList'
import PageHeader from '../Common/PageHeader/PageHeader'
import  {PhonesProducts,PhonesProductsNewArrival,PhonesProductsTrennding}  from '../../Data/PhonesProducts'

function Phones() {
  return (
    <div>
      <PageHeader PageName={'phones'} />
      <Header heading="PHONES" subHeading="TRENDING NOW" />
      <ProductList products={PhonesProductsTrennding} />
      <Header heading="PHONES" subHeading="NEW ARRIVAL" />
      <ProductList products={PhonesProductsNewArrival} />
      <Header heading="ALL PRODUCTS" subHeading="PHONES" />
      <ProductList products={PhonesProducts} />
         </div>
  )
}

export default Phones
