import React from "react"

import ProductCard from "../../components/product-cards/ProductCard"
import { plantHaus, aiSumz, riversEdge, interviewIQ, dangoDB, ad3lie } from "../../data/ProductData"
import "./products.scss"

const Products = () => {
 


  return (
    <div className="products-container">
      <h3>OUR WORK</h3>
      <div className="product-row">
        {[plantHaus, aiSumz, riversEdge, interviewIQ, dangoDB, ad3lie].map((product) => (
          <div className="product-container" key={product.id}>
            <ProductCard
              {...product}
              />
              
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products


