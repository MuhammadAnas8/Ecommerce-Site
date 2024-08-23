import React from 'react'
import AllProducts from '../../Data/AllProducts'
import ProductCategory from '../../Common/ProductCategory/ProductCategory'

function Laptops() {
  const allLaptops = AllProducts.filter((product) => product.category === "laptop")
  return (
<>
<ProductCategory category="Laptops" products={allLaptops} />
</>
  )
}

export default Laptops
