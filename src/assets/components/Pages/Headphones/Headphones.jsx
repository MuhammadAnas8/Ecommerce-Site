import React from "react";
import Header from "../../Common/Header/Header";
import ProductList from "../../Common/ProductList/ProductList";
import PageHeader from "../Common/PageHeader/PageHeader";
import AllProducts from "../../Data/AllProducts";

function Headphones() {
  const allHeadphones = AllProducts.filter(
    (product) => product.category === "headphones"
  );
  const newArrival = allHeadphones.filter(
    (product) => product.newArrival === true
  );
  const bestSelling = allHeadphones.filter(
    (product) => product.bestSelling === true
  );
  const trending = allHeadphones.filter((product) => product.trending === true);
  return (
    <div className="">
      <PageHeader PageName={"Headphones"} />
      {newArrival.length > 0 && (
        <>
          <Header heading="HEADPHONES" subHeading="NEW ARRIVALS" />
          <ProductList products={newArrival} />
        </>
      )}
      {bestSelling.length > 0 && (
        <>
          <Header heading="HEADPHONES" subHeading="Best Selling" />
          <ProductList products={bestSelling} />
        </>
      )}

      {trending.length > 0 && (
        <>
          <Header heading="HEADPHONES" subHeading="TRENDING NOW" />
          <ProductList products={trending} />
        </>
      )}

      <Header heading="ALL PRODUCTS" subHeading="HEADPHONES" />
      <ProductList products={allHeadphones} />
    </div>
  );
}

export default Headphones;
