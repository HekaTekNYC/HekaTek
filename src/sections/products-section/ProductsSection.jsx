import Button from "../../components/button/Button"
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

import "./products-section.scss"

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
  const limitedProductList = productList.slice(0, 2)
  return (
    <div className="products-container">
      <div className="products-header">
        <h2>OUR WORK</h2>
      </div>
      <div className="products-info">
        <div className="products-text">
          <h2 className="h2-heading">Built for Results</h2>
          <p>
            Explore a sample of the projects we’ve designed and developed for
            businesses like yours. Each showcases our dedication to creativity,
            functionality, and measurable results. Ready to see more? View more
            to dive into the full scope of our work and discover how we can
            bring your vision to life.
          </p>
        </div>
        <div className="products-btn">
          <Button
            text={"View More"}
            to="/work"
            btnType={"solid"}
            width={"short"}
          />
        </div>
      </div>
      {limitedProductList.map((product, index) => (
        <div
          key={index}
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

export default ProductsSection
