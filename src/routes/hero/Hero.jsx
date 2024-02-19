import React from "react"

import PlanetSphere from "../../components/planet/Planet"
import Spacepink from "../../assets/images/pink_space2.png"

import "./hero.scss"

const Hero = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-row">
          <div className="hero-left-container">
            <div className="header">
              <div className="hekatek-3d">HekaTek</div>
              <div className="header-text">
                FREELANCERS WITH A PASSION FOR BRINGING YOUR VISION TO LIFE.
              </div>
            </div>
          </div>

          <div className="hero-right-container">
            <div className="galaxy-container">
              <img
                src="https://i.ibb.co/tqnsT0M/Hero.jpg"
                alt="galaxy"
                className="galaxy"
                loading="lazy"
                decoding="async"
              />
              <div className="hero-image">
                <PlanetSphere />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
