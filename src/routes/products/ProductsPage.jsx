import React from "react"

import ProductCard from "../../components/product-cards/ProductCard"
import ProductInfo from "../../components/product-info/ProductInfo"

import {
  plantHaus,
  walkAngels,
  weFund,
  creativeLoft,
  riversEdge,
  interviewIQ,
  dangoDB,
  ad3lie,
} from "../../data/ProductData"

import "./products-page.scss"

const ProductsSection = () => {
  const productList = [
    plantHaus,
    weFund,
    creativeLoft,
    walkAngels,
    riversEdge,
    interviewIQ,
    dangoDB,
    ad3lie,
  ]

  return (
    <div className="products-page-container">
      <div className="products-page-header">
        <h2>OUR WORK</h2>
      </div>
      {productList.map((product, index) => (
        <div
          key={index}
          className={
            product.id % 2 !== 0 ? "product-row row1" : "product-row-rev row2"
          }
        >
          {product.id % 2 !== 0 ? (
            <>
              <div className="product-page-container">
                <ProductCard {...product} />
              </div>
              <div className="product-page-desc-container">
                <ProductInfo {...product} />
              </div>
            </>
          ) : (
            <>
              <div className="product-page-desc-container">
                <ProductInfo {...product} />
              </div>
              <div className="product-page-container">
                <ProductCard {...product} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default ProductsSection
