import React from "react";
import AllProducts from "../../Data/AllProducts";
import ProductCategory from "../../Common/ProductCategory/ProductCategory";

function Headphones() {
  const allHeadphones = AllProducts.filter(
    (product) => product.category === "headphones"
  );
  
  return (
 <>
 <ProductCategory category="Headphones" products={allHeadphones} />
 </>
  );
}

export default Headphones;
