import React, { useEffect, useState } from "react"
import { useSpring, animated } from "@react-spring/web"
import Cosmo from "../../assets/images/cosmo.png"
import SpaceOverlay from "../../components/stars/Stars"
import "./hero.scss"

const Hero = () => {
  const { rotate } = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: true,
    config: { duration: 300000 },
  })

  const text = "Your vision, our code. Freelance full stack web developers."

  const [showText, setShowText] = useState("")
  const [index, setIndex] = useState(0) // Initialize index state

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setShowText((prevText) => prevText + text[index])
        setIndex((prevIndex) => prevIndex + 1) // Increment index
      } else {
        clearInterval(intervalId)
      }
    }, 50) // Adjust speed as needed

    return () => clearInterval(intervalId) // Cleanup on unmount
  }, [text, index])

  return (
    <div>
      <div className="hero-container">
        <div className="space-container">
          <SpaceOverlay />
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
            <div className="mission-statement-container">
              <span className="hekatek-header">
                <span className="hekatek-word">HekaTek</span>
                <br /> Web Development
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
