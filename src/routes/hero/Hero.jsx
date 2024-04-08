import React from "react"
import HeroBkrnd from "../../assets/images/hero-color.png"
import Button from "../../components/button/Button"
import "./hero.scss"

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div
          className="background-image-container"
          style={{
            // position: "absolute",
            // top: 0,
            // left: 0,

            backgroundImage: `url(${HeroBkrnd})`,
            backgroundSize: "cover",
            // filter: "blur(50px)",
            zIndex: -1,
          }}
        >
          <div
            className="background-image"
            //   style={{
            //     // position: "absolute",
            //     // top: 0,
            //     // left: 0,
            //     height: "80%",
            //     width: "80%",
            //     backgroundImage: `url(${HeroBkrnd})`,
            //     // backgroundSize: "cover",
            //     // filter: "blur(50px)",
            //     zIndex: -1,
            //   }}
          >
            {/* <img
              src="../../assets/images/hero-color.png"
              alt="hero-color"
              style={{ objectFit: "cover" }}
            /> */}
          </div>
        </div>
        <header className="hero-header">
          <h1>HekaTek</h1>
          <h2 className="hero-text">
            Freelance software developers with a passion for bringing your
            visions to life.
          </h2>
          <Button
            href="mailto:hekateknyc@gmail.com"
            text={"Schedule a Meeting"}
          ></Button>
        </header>
      </div>
      <div className="banner-container">
        <div className="ellipse"></div>
        <h4 className="banner-text">WEBSITE DEVELOPMENT</h4>
        <div className="ellipse"></div>
        <h4 className="banner-text">WEBSITE HOSTING</h4>
        <div className="ellipse"></div>
        {/* <h4 className="banner-text">DEBUGGING</h4> */}
      </div>
    </>
  )
}

export default Hero
