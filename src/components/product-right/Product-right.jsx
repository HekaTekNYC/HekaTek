
import React from "react";
import TechIcon from "../tech-icon/Tech-icon";
import "./product-right.scss";

const ProductRight = ({
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
        <div className="product-image">
          <a href={aLink} target="_blank">
            <img src={img.src} alt={img.alt} loading="lazy" decoding="async"/>
          </a>
        </div>
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
  );
};

export default ProductRight;
