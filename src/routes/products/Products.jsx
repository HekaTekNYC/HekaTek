import React from "react"

import ProductCard from "../../components/product-cards/ProductCard"
import { plantHaus, interviewIQ, dangoDB, ad3lie } from "../../data/ProductData"
import "./products.scss"

const Products = () => {
  return (
    <div className="products-container">
      <h2>OUR WORK</h2>
      <div className="product-container">
        {[plantHaus, interviewIQ, dangoDB, ad3lie].map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            desc={product.desc}
            icons={product.icons}
            img={product.img}
            info={product.info}
            btn={product.btn}
            aLink={product.aLink}
            isCurrentWork={product.isCurrentWork}
          />
        ))}
      </div>
    </div>
  )
}

export default Products
