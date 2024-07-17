import React from "react"
import ProductBlur from "../../assets/images/product-clr.png"

import "./product-card.scss"

const ProductCard = ({img, id, deg, scale}) => {
  return (
    <div className="product-card-container" key={id}>
      <div className="product-card-bkrnd">
        <div className="product-clr-bkrnd">
          <img
            // src={ProductBlur}
            // src="https://res.cloudinary.com/daecnx7ih/image/upload/v1721246922/AdobeStock_848749451_Preview_kqrrov.jpg"
            // src="https://res.cloudinary.com/daecnx7ih/image/upload/v1721245879/AdobeStock_861858498_Preview_ktxblo.jpg"
            // src="https://res.cloudinary.com/daecnx7ih/image/upload/v1721248159/AdobeStock_861858554_Preview_1_iyemuc.jpg"
            // src="https://res.cloudinary.com/daecnx7ih/image/upload/v1720809805/AdobeStock_490542102_Preview_m0ahjq.jpg"
            // src="https://res.cloudinary.com/daecnx7ih/image/upload/v1720809706/AdobeStock_738033285_Preview_u3zjsk.jpg"
            // src="https://res.cloudinary.com/daecnx7ih/image/upload/v1721244008/AdobeStock_831562817_Preview_weuz8p.jpg"
            // src="https://res.cloudinary.com/daecnx7ih/image/upload/v1721251040/AdobeStock_747934197_Preview_paezhl.jpg"
            // src="https://res.cloudinary.com/daecnx7ih/image/upload/v1721248159/AdobeStock_861858554_Preview_1_iyemuc.jpg"

            // src="https://res.cloudinary.com/daecnx7ih/image/upload/v1721245879/AdobeStock_861858498_Preview_ktxblo.jpg"
            src="https://res.cloudinary.com/daecnx7ih/image/upload/v1721255756/AdobeStock_840259051_Preview_jsxykf.jpg"
            alt="pastel abstract wheel"
            // style={{ transform: `rotate(${deg}deg) scale${scale}` }}
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
