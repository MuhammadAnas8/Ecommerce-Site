import React from 'react'
import AllProducts from '../../Data/AllProducts'
import ProductCategory from '../../Common/ProductCategory/ProductCategory'

function Phones() {
  const allPhones = AllProducts.filter(product => product.category === 'phones');
  return (
<>

<ProductCategory category="Phones" products={allPhones} />

</>
  )
}

export default Phones
