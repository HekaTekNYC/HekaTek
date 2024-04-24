import React from "react"
import ProductBlur from "../../assets/images/product-clr.png"

import "./product-card.scss"

const ProductCard = ({ img, id, deg, scale }) => {
  return (
    <div className="product-card-container" key={id}>
      <div className="product-card-bkrnd">
        <div className={`product-clr-bkrnd `}>
          <img
            src={ProductBlur}
            alt="pastel abstract wheel"
            style={{ transform: `rotate(${deg}deg) scale${scale}` }}
          />
        </div>
      </div>
      <div className="glass-container">
        <div className="image-container">
          <img
            src={img.src}
            alt={img.alt}
            className="product-img"
            loading="lazy"
            decoding="async"
            title={img.title}
            width="100%"
            height="auto"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
