import ProductBkrndpng from "../../assets/images/product-bkrnd.png"
import ProductBkrndwebp from "../../assets/images/product-bkrnd.webp"

import "./product-card.scss"

const ProductCard = ({img, id, deg, scale, aLink, webp}) => {
  console.log("Rendering ProductCard with id:", id)
  return (
    <div className="product-card-container" key={id}>
      <div className="product-card-bkrnd">
        <picture>
          <source
            srcSet={ProductBkrndwebp}
            type="image/webp"
            media="(min-width: 300px)"
          />
          <source
            srcSet={ProductBkrndpng}
            type="image/png"
            media="(min-width: 300px)"
          />
          <img
            loading="lazy"
            decoding="async"
            src={ProductBkrndpng}
            alt="pastel abstract textured glass with blur"
            style={{transform: `rotate(${deg}deg) scale${scale}`}}
            sizes="(max-width: 650px) 100vw, 650px"
          />
        </picture>
      </div>
      <div className="glass-container">
        <div className="image-container">
          <a href={aLink} target="_blank" rel="noopener noreferrer">
            <picture>
              <source
                srcSet={webp}
                type="image/webp"
                media="(min-width: 300px)"
              />
              <source
                srcSet={img.src}
                type="image/png"
                media="(min-width: 300px)"
              />
              <img
                loading="lazy"
                decoding="async"
                src={img.src}
                alt={img.alt}
                className="product-img"
                title={img.title}
                sizes="(max-width: 650px) 100vw, 650px"
              />
            </picture>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
