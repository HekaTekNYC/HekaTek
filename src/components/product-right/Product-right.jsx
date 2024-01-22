import React from "react"
import TechIcon from "../tech-icon/Tech-icon"

import "./product-right.scss"

const ProductRight = ({ name, desc, icons, img, info, btn, aLink }) => {
  return (
    <>
      <div className="product-row">
        <div className="product-left">
          <div className="product-left-text">
            <div className="product-name">{name}</div>
            <div className="product-desc">{desc}</div>
          </div>
          <div className="product-tech-row">
            {icons.map((icon, index) => (
              <TechIcon key={index} svgPath={icon.src} altText={icon.alt} />
            ))}
          </div>
        </div>
        <div className="product-right">
          <div className="product-card">
            <div className="product-image-glass">
              <div className="product-image">
                <img src={img.src} alt={img.alt} />
              </div>
            </div>
            <div className="product-card-text">
              <div className="spacer"></div>
              <div className="product-text">
                <div className="product-info">{info}</div>
                <a href={aLink} target="_blank">
                  <button className="product-btn">{btn}</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductRight
