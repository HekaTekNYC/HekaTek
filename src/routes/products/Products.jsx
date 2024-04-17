import React from "react"

import ProductCard from "../../components/product-cards/ProductCard"
import {
  plantHaus,
  aiSumz,
  riversEdge,
  interviewIQ,
  dangoDB,
  ad3lie,
} from "../../data/ProductData"
import "./products.scss"

const Products = () => {
  return (
    <div className="products-container">
      <h3>OUR WORK</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        excepturi ad est perspiciatis vitae, rerum doloremque quaerat modi magni
        quia.
      </p>
      <div className="product-row">
        {[plantHaus, aiSumz, riversEdge, interviewIQ, dangoDB, ad3lie].map(
          (product) => (
            <div className="product-container" key={product.id}>
              <ProductCard {...product} />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Products
