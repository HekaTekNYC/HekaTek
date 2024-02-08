import React from "react"

import Sparkles from "../../components/sparkles/Sparkles"
import SpaceOverlay from "../../components/stars/Stars"
import TechServices from "../../components/tech-services/Tech-services"

import "./about.scss"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-row">
        <div className="about-info">
          <div className="about-header">About Us</div>
          We are two software developers whose passions lie in unraveling
          complex challenges and transforming them into opportunities. Whether
          it's revitalizing an existing codebase or innovating from the ground
          up, we provide dynamic, responsive, and intuitively user-friendly
          applications. Driven by the art of building digital spaces that not
          only meet but anticipate the needs of your audience. When we're not
          coding, you'll find us sharpening our skills with algorithm
          challenges, diving into gaming adventures, or picking up a new hobby.
          It's this continuous pursuit of knowledge that keeps our work fresh
          and exciting. Interested in elevating your online presence? Get in
          touch below.
        </div>
        <div className="about-services">
          <div className="tech-overlay">
            <TechServices />
          </div>

          <div className="sparkle-overlay">
            {/* <Sparkles sparklesCount={500} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
