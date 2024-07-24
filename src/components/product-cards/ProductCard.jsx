import React from "react"
import ProductBlur from "../../assets/images/product-clr.png"

import "./product-card.scss"

const ProductCard = ({img, id, deg, scale}) => {
  return (
    <div className="product-card-container" key={id}>
      <div className="product-card-bkrnd">
        <img
          src={
            // this looks good - more purple tone and blue
            // "https://res.cloudinary.com/daecnx7ih/image/upload/v1721769403/AdobeStock_591405734_Preview_cryncu.jpg"

            // nice
            "https://res.cloudinary.com/daecnx7ih/image/upload/v1721771229/AdobeStock_482707154_Preview_ac6hqa.jpg"
            // ""
          }
          alt="pastel abstract wheel"
          style={{transform: `rotate(${deg}deg) scale${scale}`}}
        />
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
