import React from "react"
import { useSpring } from "@react-spring/web"
import ThreeDeeText from "../../components/3d-text/3d-text"

import PlanetSphere from "../../components/planet/Planet"
import SpaceCrag from "../../assets/images/space-crag3.svg"

import "./hero.scss"

const Hero = () => {
  const { rotate } = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: true,
    config: { duration: 300000 },
  })

  return (
    <div>
      <div className="hero-container">
        <div className="galaxy-container">
          <img src={SpaceCrag} alt="galaxy" className="galaxy" />
        </div>

        <div className="hero-row">
          <div className="hero-left-container">
            <div className="header">
              <div className="hekatek-3d">
                <ThreeDeeText />
              </div>
              <div className="header-text">
                FREELANCERS WITH A PASSION FOR BRINGING YOUR VISION TO LIFE.
              </div>
            </div>
          </div>

          <div className="hero-right-container">
            <div className="hero-image">
              <PlanetSphere />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
