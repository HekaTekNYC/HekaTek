import React from "react"
import Button from "../button/Button"
import "./product-card.scss"

const ProductCard = ({ name, desc, img, info, btn, aLink, id }) => {
  return (
    <div className="product-card-container" key={id}>
      <div className="image-container">
        <img
          src={img.src}
          alt={img.alt}
          className="product-img"
          loading="lazy"
          decoding="async"
          title={img.title}
        />
      </div>

      <div className="product-info inverted-border">
        <div className="header-row">
          <div className="header-text">
            <h5 className="product-name">{name}</h5>
            <h6 className="short-desc">{desc}</h6>
          </div>
        </div>

        <p className="long-desc">{info}</p>
        <div className="product-btn">
          <Button href={aLink} text={btn}></Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
