import React from "react"

import HeroBkrnd from "../../assets/images/hero-bkrnd.webp"
import Button from "../../components/button/Button"
import "./hero.scss"

const Hero = () => {
  const bannerItems = [
    { text: "WEBSITE DEVELOPMENT" },
    { text: "HOSTING" },
    { text: "RESPONSIVE DESIGN" },
    { text: "SOFTWARE DEVELOPMENT" },
    { text: "DEBUGGING" },
  ]
  return (
    <>
      <div
        className="background-image-container"
        style={{
          backgroundImage: `url(${HeroBkrnd})`,
        }}
      ></div>
      <div className="hero-container">
        <header className="hero-header">
          <h1>HEkATEk</h1>
          <h4 className="hero-text">
            Software developers with a passion for bringing your visions to
            life.
          </h4>
          <Button
            text={"Schedule A Meeting"}
            scrollToId={"contact"}
            onClick={() => scrollToSection("contact")}
            btnType={"solid"}
            width={"short"}
          />
        </header>
      </div>

      <div className="banner-container">
        {bannerItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className={`ellipse ellipse-${index}`}></div>
            <h4 className={`banner-text banner-${index}`}>{item.text}</h4>
          </React.Fragment>
        ))}
        <div className="ellipse ellipse-6"></div>
      </div>
    </>
  )
}

export default Hero
