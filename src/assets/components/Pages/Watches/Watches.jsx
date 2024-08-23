import React from 'react'
import AllProducts from '../../Data/AllProducts'
import ProductCategory from '../../Common/ProductCategory/ProductCategory'

function Watches() {
  const AllWatches = AllProducts.filter(product => product.category === 'watches');
  return (
<>
 <ProductCategory category="Watches" products={AllWatches} />
</>
  )
}

export default Watches
