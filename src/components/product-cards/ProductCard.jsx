import React, { useState, useRef, useEffect } from "react"

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
  video,
  id,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const descriptionRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState("0px")

  useEffect(() => {
    console.log(`[Card] useEffect - description updated for title: ${name}`)
    if (descriptionRef.current) {
      const newMaxHeight = `${descriptionRef.current.scrollHeight + 150}px`
      console.log(`[Card] New maxHeight for ${name}: ${newMaxHeight}`)
      setMaxHeight(newMaxHeight)
    }
  }, [info, name]) // Depend on description and title to recalculate if it changes

  console.log(`[Card] Rendered - ${name}, isHovered: ${isHovered}`)

  return (
    <div
      className="product-card-container"
      key={id}
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}
    >
      <div className="image-container">
        <div className={`image-overlay${id}`}></div>
        <img
          src={img.src}
          alt={img.alt}
          className="product-img"
          loading="lazy"
          decoding="async"
          style={{ display: isHovered && video ? "none" : "block" }}
        />
        {video && (
          <video
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            style={{ display: isHovered ? "block" : "none" }}
          >
            <source src={video} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="product-info inverted-border">
        <h4 className="product-name">{name}</h4>
        <h5 className="short-desc">{desc}</h5>
      </div>

      <div
        className="card-overlay"
        style={{ maxHeight: isHovered ? maxHeight : "0px" }} // Adjust based on hover
      >
        <p className="long-desc" ref={descriptionRef}>
          {info}
        </p>
        <div className="button">
          <Button link={aLink} text={btn}></Button>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default ProductCard

{
  /* <div
    className="card"
    key={id}
      onMouseEnter={() => {
        console.log(`[Card] Mouse Enter - ${title}`);
          setIsHovered(true);
      }}
      onMouseLeave={() => {
        console.log(`[Card] Mouse Leave - ${title}`);
        setIsHovered(false);
      }}
    >
      <>
        <img src={imageUrl} className="card__image" alt="" />
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
          <img className="card__thumb" src={thumbUrl} alt="" />
          <div className="card__header-text">
            <h3 className="card__title">{title}</h3>
            {/* Status is removed from view when not hovering 
          </div>
        </div>

        <div
          className="card__overlay"
          style={{ maxHeight: isHovered ? maxHeight : '0px',  }} // Adjust based on hover
        >
          <p className="card__description" ref={descriptionRef}>{description}</p>
        </div>
      </>
    </div> */
}
