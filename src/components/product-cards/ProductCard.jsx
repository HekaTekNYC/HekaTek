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
    <div className="product-card-container">
      <div className="product-card ">
        <div className="product-card-shadow"></div>
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
          <img src={img.src} alt={img.alt} loading="lazy" decoding="async"/>
        </a>
      </div>
      <div className="product-info-container">
          <div className="product-tech-row">
            {icons.map((icon, index) => (
              <div className="product-tech-icon">
              <TechIcon key={index} svgPath={icon.src} altText={icon.alt} />
              </div>
            ))}
          </div>
          <div className="product-full-desc" >{info}</div>
            <Button  link={aLink}  text={btn} />
         </div>
      </div>
    </div>
  );
};

export default ProductCard;
