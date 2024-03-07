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
        <header className="hero-header">
          <h1>HekaTek</h1>
          <h2 className="hero-text">
            FREELANCE SOFTWARE DEVELOPERS WITH A PASSION FOR BRINGING YOUR
            VISIONS TO LIFE.
          </h2>
        </header>
      </div>
    </>
  )
}

export default Hero
