import React from "react"
import Blob from "../../assets/images/sunset-blob2.svg"
import Glass1 from "../../assets/images/glass-blob.svg"

import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="blob">{/* <img src={Blob} alt="blob image" /> */}</div>
      <div className="glass1">
        <img src={Glass1} alt="blob" />
      </div>
      <div className="hero-header">
        <h1 className="hero-hekatek">HekaTek</h1>
        <div className="hero-text">
          FREELANCERS WITH A PASSION FOR BRINGING YOUR VISION TO LIFE.
        </div>
      </div>
    </div>
  )
}

export default Hero
