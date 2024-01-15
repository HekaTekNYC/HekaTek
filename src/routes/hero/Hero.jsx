import React from "react"
import { useSpring, animated } from "@react-spring/web"
import Cosmo from "../../images/cosmo.png"
import "./hero.scss"

const Hero = () => {
  const { rotate } = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    loop: true,
    config: { duration: 400000 },
  })

  return (
    <div>
      <div className="hero-container">
        <div className="hero-left-container">
          <div className="hero-image">
            <animated.div
              style={{ transform: rotate.to((r) => `rotate(${r}deg)`) }}
            >
              <link
                rel="preload"
                href="path-to-your-image.jpg"
                as="image"
              ></link>
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
            <div className="mission-statement">
              Your vision, our code. <br /> Freelance full stack web developers.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
