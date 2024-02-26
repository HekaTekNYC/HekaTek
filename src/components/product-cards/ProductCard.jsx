import React from "react"
import TechIcon from "../tech-icon/Tech-icon"
import Button from "../button/Button"
import "./product-card.scss"

const ProductCard = ({
  name,
  desc,
  icons,
  img,
  info,
  btn,
  aLink,
  isCurrentWork,
}) => {
  return (
    // <div className="product-card-wrapper">
    // <div className="dark-overlay"></div>
    <div className="product-card-container">
      <div className="product-img-container">
        <div className="product-img-overlay"></div>
        <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
      </div>
      <div className="product-info inverted-border">
        <h5 className="product-name">{name}</h5>
        <p className="short-desc">{desc}</p>
        <p className="long-desc">{info}</p>
      </div>
    </div>
    // </div>
  )
}

export default ProductCard
