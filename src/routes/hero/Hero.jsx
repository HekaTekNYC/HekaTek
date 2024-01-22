import React, { useEffect, useState, Suspense } from "react"
import { useSpring, animated } from "@react-spring/web"
import SparklesOverlay from "../../components/sparkles/Sparkles"
import ThreeDeeText from "../../components/3d-text/3d-text"
import Cosmo from "../../assets/images/cosmo.png"
import SpaceOverlay from "../../components/stars/Stars"
import { OrbitControls } from "@react-three/drei"
import "./hero.scss"

const Hero = () => {
  const { rotate } = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: true,
    config: { duration: 300000 },
  })

  // const text = "Web Developers with a passion for bringing your vision to life."

  // const [showText, setShowText] = useState("")
  // const [index, setIndex] = useState(0)

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (index < text.length) {
  //       setShowText((prevText) => prevText + text[index])
  //       setIndex((prevIndex) => prevIndex + 1)
  //     } else {
  //       clearInterval(intervalId)
  //     }
  //   }, 50)
  //   return () => clearInterval(intervalId) // Cleanup on unmount
  // }, [text, index])

  return (
    <div>
      <div className="hero-container">
        <div className="space-container">
          <SpaceOverlay />
        </div>
        {/* <div className="sparkles-container">
          <SparklesOverlay />
        </div> */}
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
            <div className="mission-statement-container">
              <span className="hekatek-header">
                <div className="half-intro">Hey, We're HEKATEK</div>

                {/* <div className="drei3d"><ThreeDeeText />  </div> */}
              </span>
              <span className="animated-text">
                Web Developers with a passion for bringing your vision to life.
                {/* {showText}
                <span className="cursor">|</span> */}
              </span>

              <div className="mission-statement typewriter-effect">
                {showText}s
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
