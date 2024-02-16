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
          <div className="about-header">ABOUT US</div>
          We're a duo of software developers who find joy in decluttering
          digital messes, turning complexity into simplicity. Our code is clean,
          our interfaces seamless, and our applications are so intuitive, they
          practically read your mind. Off the clock, you'll find us digging into
          algorithms, getting lost in games or cultivating the art of indoor
          plant whispering (they say the secret is in the coding lullabies).
          Ready to give your online presence a sprinkle of our HekaTek magic?
          Hit us up/contact us below.
        </div>
        <div className="about-services">
          <div className="tech-overlay">
            <TechServices />
          </div>

          <div className="sparkle-overlay">
            <Sparkles count={200} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
