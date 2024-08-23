import React , { useState } from 'react'
import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard';

function ProductList({products}) {
    const [showAll, setShowAll] = useState(false);

    const handleShowMore = () => {
      setShowAll(!showAll);
    };
  return (
    <div>
        <div className="product-list">
        {products.slice(0, showAll ? products.length : 4).map(product => (
          <ProductCard 
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
      {products.length > 4 && (
        <button className="show-more-button" onClick={handleShowMore}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  )
}

export default ProductList
