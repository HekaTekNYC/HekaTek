import React from "react"

import ProductCard from "../../components/product-cards/ProductCard"
import ProductInfo from "../../components/product-info/ProductInfo"

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
      <h2>OUR WORK</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        excepturi ad est perspiciatis vitae, rerum doloremque quaerat modi magni
        quia.
      </p>
      {[plantHaus, aiSumz, riversEdge, interviewIQ, dangoDB, ad3lie].map(
        (product) =>
          product.id % 2 ? (
            <>
              <div className="product-row">
                <div className="product-container" key={product.id}>
                  <ProductCard {...product} />
                </div>
                <div className="product-info-container " key={product.id}>
                  <ProductInfo {...product} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="product-row-rev">
                <div className="product-info-container" key={product.id}>
                  <ProductInfo {...product} />
                </div>
                <div className="product-container" key={product.id}>
                  <ProductCard {...product} />
                </div>
              </div>
            </>
          )
      )}
    </div>
  )
}

export default Products
