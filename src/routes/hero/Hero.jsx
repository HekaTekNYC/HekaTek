import React, { useEffect, useState, Suspense } from "react"
import { useSpring, animated } from "@react-spring/web"
import SparklesOverlay from "../../components/sparkles/Sparkles"
import ThreeDeeText from "../../components/3d-text/3d-text"
import Cosmo from "../../assets/images/cosmo.png"
import SpaceOverlay from "../../components/stars/Stars"
import HeaderText from "../../components/headers/HeaderText"
// import GalaxyCurve from "../../assets/images/galaxy.svg"
// import { OrbitControls } from "@react-three/drei"
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
      <div className="galaxy-curve"> 
      </div>
        {/* <img src={GalaxyCurve} alt="galaxy" className="galaxy"/> */}
   
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
              <animated.div
                style={{ transform: rotate.to((r) => `rotate(${r}deg)`) }}
              >
                <div className="cosmo">
                <img src={Cosmo} alt="cosmo" />
                </div>
              </animated.div>
            </div>
          </div>

        </div>
      </div>
      {/* <div className="space-container">
        <div className="space-background"></div>
      </div> */}
      {/* <div className="wave">
        <img src={Wave} alt="wave"/>
      </div> */}
   
    </div>
  )
}

export default Hero


  
        {/* <div className="space-container">
          <SpaceOverlay />
        </div>
        <div className="sparkles-container">
          <SparklesOverlay />
        </div> */}
