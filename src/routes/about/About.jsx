import React from "react"
import Button from "../../components/button/Button"

import AboutBkrd from "../../assets/images/about-bkg.svg"
import Devicewebp from "../../assets/images/device-mockup.webp"
import Devicepng from "../../assets/images/device-mockup.png"

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
      <div className="about-container" id="about">
        <div className="about-blob-container">
          <div className="about-bkrnd-img">
            <img
              loading="lazy"
              decoding="async"
              src={AboutBkrd}
              alt="bright blue and dark blue blurred blob"
            />
          </div>
        </div>
        <div className="about-left">
          <div className="about-img-container">
            <picture>
              <source
                srcSet={Devicewebp}
                type="image/webp"
                media="(min-width: 400px)"
              />
              <source
                srcSet={Devicepng}
                type="image/png"
                media="(min-width: 400px)"
              />
              <img
                loading="lazy"
                decoding="async"
                src={Devicepng}
                alt="mockup devices with desktop laptop tablet and phone"
                sizes="(max-width: 750px) 100vw, 650px"
                height="689"
                width="1097"
              />
            </picture>
          </div>
        </div>
        <div className="about-info-container">
          <h2 className="about-header">
            About <br /> HekaTek
          </h2>
          <div className="about-indent">
            <h4 className="about-subheader">
              Empowering Small Businesses Through Expert Web Development
            </h4>
            <p className="about-p">
              With ten years of collective experience, we founded our company to
              focus on helping small businesses like ours thrive online. As a
              community-driven, women-owned business, we take pride in
              supporting fellow small business owners, providing the tools and
              expertise needed to succeed in the digital world.
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
