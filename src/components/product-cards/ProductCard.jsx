import React from "react";
import TechIcon from "../tech-icon/Tech-icon";
import "./product-card.scss";
import Button from "../button/Button";

const ProductCard = ({
  name,
  desc,
  icons,
  img,
  info,
  btn,
  aLink,
  isCurrentWork
}) => {
  return (
    <div className="product-card-container product-card-bkrnd">
      <div className="product-intro-container">
            <div className="product-name">
              {name}{" "}
              {isCurrentWork && (
                <span className="current">WORK IN PROGRESS</span>
              )}
            </div>
            <div className="product-short-desc">{desc}</div>
      </div>
      <div className="product-image-container"> 
        <a href={aLink} target="_blank">
          <img src={img.src} alt={img.alt} />
        </a>
      </div>
      <div className="product-info-container">
          <div className="product-tech-row">
            {icons.map((icon, index) => (
              <TechIcon key={index} svgPath={icon.src} altText={icon.alt} />
            ))}
          </div>
          <div className="product-full-desc" >{info}</div>
          {/* <a href={aLink} target="_blank">
              <button className="product-btn">{btn}</button>
            </a> */}
            <Button />

      </div>
    </div>
  );
};

export default ProductCard;
