import React from "react";
import PageHeader from "../../Pages/Common/PageHeader/PageHeader";
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";


const ProductCategory = ({ category, products }) => {
    const filteredProducts = (filter) =>
      products.filter((product) => product[filter] === true);
  
    return (
      <div className="">
        <PageHeader PageName={category} />
  
        {filteredProducts("newArrival").length > 0 && (
          <>
            <Header heading={category.toUpperCase()} subHeading="NEW ARRIVALS" />
            <ProductList products={filteredProducts("newArrival")} />
          </>
        )}
  
        {/* {filteredProducts("bestSelling").length > 0 && (
          <>
            <Header heading={category.toUpperCase()} subHeading="BEST SELLING" />
            <ProductList products={filteredProducts("bestSelling")} />
          </>
        )} */}
  
        {filteredProducts("trending").length > 0 && (
          <>
            <Header heading={category.toUpperCase()} subHeading="TRENDING NOW" />
            <ProductList products={filteredProducts("trending")} />
          </>
        )}
  
        <Header heading="ALL PRODUCTS" subHeading={category.toUpperCase()} />
        <ProductList products={products} />
      </div>
    );
  };
  
  export default ProductCategory;