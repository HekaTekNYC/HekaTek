import React from "react"

import ProductCard from "../../components/product-cards/ProductCard"
import ProductInfo from "../../components/product-info/ProductInfo"

import {
  plantHaus,
  walkAngels,
  aiSumz,
  riversEdge,
  interviewIQ,
  dangoDB,
  ad3lie,
} from "../../data/ProductData"

import "./products.scss"

const Products = () => {
  const productList = [
    plantHaus,
    walkAngels,
    aiSumz,
    riversEdge,
    interviewIQ,
    dangoDB,
    ad3lie,
  ]

  return (
    <div className="products-container">
      <div className="products-header">
        <h2>OUR WORK</h2>
      </div>
      {productList.map(product => (
        <div
          key={product.id}
          className={
            product.id % 2 !== 0 ? "product-row row1" : "product-row-rev row2"
          }
        >
          {product.id % 2 !== 0 ? (
            <>
              <div className="product-container">
                <ProductCard {...product} />
              </div>
              <div className="product-desc-container">
                <ProductInfo {...product} />
              </div>
            </>
          ) : (
            <>
              <div className="product-desc-container">
                <ProductInfo {...product} />
              </div>
              <div className="product-container">
                <ProductCard {...product} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default Products
