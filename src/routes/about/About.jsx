import React from "react"
import Button from "../../components/button/Button"

import AboutBkrd from "../../assets/images/wheel.png"
import AboutLg from "../../assets/images/desknew-2.png"

import "./about.scss"

const About = () => {
  // Function to open Calendly popup
  const openCalendlyPopup = () => {
    if (window.Calendly) {
      console.log("Calendly script loaded, opening popup.")
      Calendly.initPopupWidget({url: "https://calendly.com/hekateknyc"})
    } else {
      console.log("Calendly script not loaded yet.")
    }
  }

  return (
    <>
      <div className="about-container">
        <div className="about-blob-container">
          <div className="about-bkrnd-img">
            <img src={AboutBkrd} alt="" />
          </div>
        </div>
        <div className="about-img-container">
          <div className="about-img-lg">
            <img
              src="https://res.cloudinary.com/daecnx7ih/image/upload/v1719266176/nyc-skyline-sm_pnxwdf.webp"
              // height={"450px"}
              alt="placeholder image"
              style={{borderRadius: "10px"}}
            />
          </div>
          {/* <div className="about-img-sm">
            <img
              src="https://res.cloudinary.com/daecnx7ih/image/upload/v1719261785/Code-pill_ljjm4v.webp"
              height={"250px"}
              alt="placeholder image"
            />
          </div> */}
        </div>

        <div className="about-info-container">
          <h2 className="about-header">
            About <br /> HekaTek
          </h2>
          <div className="about-indent">
            <h4 className="about-subheader">
              We're a duo of software developers who find joy in decluttering
              digital messes, turning complexity into simplicity.
            </h4>
            <p className="about-p">
              Our code is clean, our interfaces seamless, and our applications
              are so intuitive, they practically read your mind. Off the clock,
              you'll find us digging into algorithms, getting lost in games or
              cultivating the art of indoor plant whispering (they say the
              secret is in the coding lullabies). Ready to give your online
              presence a sprinkle of our HekaTek magic? Schedule a meeting
              below.
            </p>
            <Button
              text={"Schedule A Meeting"}
              onClick={openCalendlyPopup}
              btnType={"solid"}
              width={"short"}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
