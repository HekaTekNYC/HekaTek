import React from "react"
import TechIcon from "../tech-icon/Tech-icon"
import "./product-left.scss"

const ProductLeft = ({
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
    <div className="product-row-rev">
      <div className="product-left-rev">
        <div className="product-card-rev">
          <div className="product-image-glass-rev">
            <div className="product-image-rev">
              <img src={img.src} alt={img.alt} />
            </div>
          </div>
          <div className="product-card-text-rev">
            <div className="product-text-rev">
              <div className="product-info-rev">{info}</div>
              <a href={aLink} target="_blank">
                <button className="product-btn-rev">{btn}</button>
              </a>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>
      <div className="product-right-rev">
        <div className="product-right-text-rev">
          <div className="product-name-rev">
            {name}
            {isCurrentWork && <span className="current">CURRENT WORK</span>}
          </div>
          <div className="product-desc-rev">{desc}</div>
        </div>
        <div className="product-tech-row-rev">
          {icons.map((icon, index) => (
            <TechIcon key={index} svgPath={icon.src} altText={icon.alt} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductLeft
