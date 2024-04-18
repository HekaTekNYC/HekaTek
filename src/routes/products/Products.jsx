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
      <div className="products-header">
        <h2>OUR WORK</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          excepturi ad est perspiciatis vitae, rerum doloremque quaerat modi
          magni quia.
        </p>
      </div>
      {[plantHaus, aiSumz, riversEdge, interviewIQ, dangoDB, ad3lie].map(
        (product) =>
          product.id % 2 !== 0 ? (
            <>
              <div className={`product-row row1`}>
                <div className={`prod-blob${product.id}`}>
                  <img src={product.blob} alt="" />
                </div>
                <div className="product-container" key={product.id}>
                  <ProductCard {...product} />
                </div>
                <div className="product-desc-container " key={product.id}>
                  <ProductInfo {...product} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={`product-row-rev row2`}>
                <div className={`prod-blob${product.id}`}>
                  {" "}
                  <img src={product.blob} alt="" />
                </div>
                <div className="product-desc-container" key={product.id}>
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
