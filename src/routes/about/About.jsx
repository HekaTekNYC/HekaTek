import React from "react"

import SpaceOverlay from "../../components/stars/Stars"
import "./about.scss"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1 className="about-header">Who We Are</h1>
        <div className="about-info">
          We came together creating open source developer tools, driven by a
          shared passion for community. Our objective is clear: to transform
          your digital interfaces into engaging, efficient, and aesthetically
          pleasing experiences. We specialize in crafting responsive designs,
          user-friendly interfaces, and innovative solutions, catering to a
          diverse range of needs – from small startups to large enterprises.
          It’s not just about coding; it’s about crafting experiences that
          resonate with your audience. Keen to explore how we can enhance your
          digital presence? Feel free to get in touch with us below.
        </div>
      </div>
      <div className="about-services">
        <div className="star-overlay">
          <SpaceOverlay />
        </div>
      </div>
    </div>
  )
}

export default About
