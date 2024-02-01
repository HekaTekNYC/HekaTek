import React, { useEffect, useState, Suspense } from "react"
import { useSpring, animated } from "@react-spring/web"
import SparklesOverlay from "../../components/sparkles/Sparkles"
import ThreeDeeText from "../../components/3d-text/3d-text"
import Cosmo from "../../assets/images/cosmo.png"
import SpaceOverlay from "../../components/stars/Stars"
import HeaderText from "../../components/headers/HeaderText"
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
        <div className="space-container">
          <SpaceOverlay />
        </div>
        <div className="sparkles-container">
          <SparklesOverlay />
        </div>
        <div className="hero-row">
          <div className="hero-left-container">
            <div className="hero-image">
              <animated.div
                style={{ transform: rotate.to((r) => `rotate(${r}deg)`) }}
              >
                <img src={Cosmo} alt="cosmo" />
              </animated.div>
            </div>
          </div>

          <div className="hero-right-container">
            <div className="header">
              <div className="three-d">
                <ThreeDeeText />
              </div>
              <div className="half-intro">Web Development </div>
            </div>

            <div className="animated-text">
              Freelancers with a passion for bringing your vision to life.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
