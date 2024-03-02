import React from "react"
import Lava from "../../components/lava/Lava"
import "./hero.scss"

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="lava-container">
          <Lava />
        </div>

        <div className="hero-header">
          <h1 className="hero-hekatek">HekaTek</h1>
          <div className="hero-text">
            FREELANCERS WITH A PASSION FOR BRINGING YOUR VISION TO LIFE.
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
