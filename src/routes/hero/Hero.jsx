import React, { useEffect, useState, Suspense } from "react"

import { useSpring, animated } from "@react-spring/web"
import SparklesOverlay from "../../components/sparkles/Sparkles"

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

  const text = "Web Developers with a passion for bringing your vision to life."

  // Bringing Your Business into the Digital Age
  // Ready to elevate your company's presence in the tech world? We specialize in transforming traditional businesses into digital leaders, ensuring your brand not only participates but thrives online.

  // "Web Development Redefined: Innovative, Intuitive, Impactful Transforming Your Vision into Exceptional Websites."
  // "Crafting Digital Experiences with Precision and Passion. Your Website, Designed to Impress and Engage."
  // "Elevate Your Online Presence with Expert Web Development. Where Professionalism Meets Creativity in Web Design."
  // "Innovate with every click. Be at the forefront of technology with custom software solutions."
  // "Tailored software that fits your business needs."
  // "Simplify your tech journey. Streamline your business with custom software solutions."
  // "Simplify your tech journey. Streamlined software solutions are just a click away."
  // "Turning your ideas into digital masterpeices. Need custom applications that stand out? You're at the right place"
  // "Welcome to HekaTek. Software solutions crafting innovative applications tailored to your needs."
  // "Transforming your brand into tangible web experiences that stop users in their tracks."
  // const text = "Your vision, our code. Freelance full stack web developers."

  const [showText, setShowText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setShowText((prevText) => prevText + text[index])
        setIndex((prevIndex) => prevIndex + 1)
      } else {
        clearInterval(intervalId)
      }
    }, 50)

    return () => clearInterval(intervalId) // Cleanup on unmount
  }, [text, index])

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
            <div className="mission-statement-container">
              <span className="hekatek-header">
                <div className="intro">
                  Hey, We're <span className="hekatek-word">HekaTek</span>
                </div>
                {/* <span className="hekatek-word">HekaTek</span> */}
                <br />
                {/* <br /> Web Development <br /> */}
              </span>
              <span className="animated-text">
                {showText}
                <span className="cursor">|</span>
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
