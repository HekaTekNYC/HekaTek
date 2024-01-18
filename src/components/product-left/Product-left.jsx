import React from "react"

const ProductLeft = ({ name, desc, icons, img, info, btn }) => {
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
              <button className="product-btn">{btn}</button>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>
      <div className="product-right-rev">
        <div className="product-right-text-rev">
          <div className="product-name-rev">
            {name}
            <span className="current">CURRENT WORK</span>
          </div>
          <div className="product-desc-rev">{desc}</div>
        </div>
        <div className="product-tech-row-rev">
          {Object.values(icons).map((icon, index) => (
            <div key={index} className="product-icon">
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductLeft
