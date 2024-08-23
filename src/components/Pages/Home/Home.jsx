import React from "react";
import AllProducts from "../../Data/AllProducts";
import Hero from "../../Hero/Hero";
import Header from "../../Common/Header/Header";
import ProductList from "../../Common/ProductList/ProductList";
import BrowseCategories from "../../BrowseCategories/BrowseCategories";
import NewArrivals from "../../NewArrivals/NewArrivals";

function Home() {
  const FlashSaleProducts = AllProducts.filter(
    (product) => product.onSale === true
  );
  const BestSellingProducts = AllProducts.filter(
    (product) => product.bestSelling === true
  );
  return (
    <div>
      <Hero />
      {FlashSaleProducts.length > 0 && (
        <>
          <Header heading="OFFERS" subHeading="FLASH SALES" />
          <ProductList products={FlashSaleProducts} />
        </>
      )}
      {BestSellingProducts.length > 0 && (
        <>
          <Header heading="THIS MONTH's" subHeading="BEST SELLING PRODUCTS" />
          <ProductList products={BestSellingProducts} />
        </>
      )}
      <Header heading="FEATURE" subHeading={"NEW ARRIVALS"} />
      <NewArrivals />
      <Header heading="WANT MORE?" subHeading="BROWSE CATEGORIES" />
      <BrowseCategories />
    </div>
  );
}

export default Home;
