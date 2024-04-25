import React from "react"
import Button from "../../components/button/Button"

import AboutBkrd from "../../assets/images/wheel.png"
import AboutLg from "../../assets/images/placeholderLg.png"
import AboutSm from "../../assets/images/placeholderSm.png"
import "./about.scss"

const About = () => {
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
            <img src={AboutLg} height={"450px"} alt="placeholder image" />
          </div>
          <div className="about-img-sm">
            <img src={AboutSm} height={"250px"} alt="placeholder image" />
          </div>
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
              presence a sprinkle of our HekaTek magic? Hit us up/contact us
              below.
            </p>

            <Button
              text={"Schedule A Meeting"}
              href={""}
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
