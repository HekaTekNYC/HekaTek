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
  epicTales,
} from "../../data/ProductData"

import "./products-page.scss"

const ProductsPage = () => {
  const productList = [
    plantHaus,
    weFund,
    creativeLoft,
    walkAngels,
    riversEdge,
    interviewIQ,
    dangoDB,
    ad3lie,
    epicTales,
  ]

  return (
    <div id="products" className="products-page">
      <div className="products-page-container">
        <div className="products-page-header">
          <h2>OUR WORK</h2>
          <p>
            At the heart of our work is the belief that every website should
            tell a story. Our work showcases designs that reflect the essence of
            each business while offering functionality built to elevate brands,
            capture attention, and deliver measurable results. Dive into our
            portfolio to see how we’ve brought bold ideas to life for businesses
            across industries.
          </p>
        </div>
        {productList.map((product, index) => (
          <div
            key={index}
            className={
              product.id % 2 !== 0 ? "product-page-row" : "product-page-row-rev"
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
    </div>
  )
}

export default ProductsPage
