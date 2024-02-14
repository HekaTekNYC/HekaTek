import React from "react";
import TechIcon from "../tech-icon/Tech-icon";
import "./product-left.scss";

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
    <div className="product-row">
      <div className="product-image-glass">
        <a href={aLink} target="_blank">
          <img src={img.src} alt={img.alt} />
        </a>
        <div className="product-content">
          <div className="product-left-text">
            <div className="product-name">
              {name}{" "}
              {isCurrentWork && (
                <span className="current">WORK IN PROGRESS</span>
              )}
            </div>
            <div className="product-desc">{desc}</div>
          </div>
          <div className="product-tech-row">
            {icons.map((icon, index) => (
              <TechIcon key={index} svgPath={icon.src} altText={icon.alt} />
            ))}
          </div>
          <div className="product-info-container">
            <div className="product-info">{info}</div>
            <a href={aLink} target="_blank">
              <button className="product-btn">{btn}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLeft;