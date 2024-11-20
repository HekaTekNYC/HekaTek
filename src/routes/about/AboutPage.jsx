import React, {useState} from "react"
import {motion} from "framer-motion"
import Button from "../../components/button/Button"
import AboutBkrd from "../../assets/images/about-bkg.svg"
import Devicewebp from "../../assets/images/device-mockup.webp"
import Devicepng from "../../assets/images/device-mockup.png"
import OurProcess from "../../components/our-process/OurProcess"
import WhyWeCare from "../../components/why-we-care/WhyWeCare"
import WhyChooseUs from "../../components/why-choose-us/WhyChooseUs"

import "./about-page.scss"

const AboutPage = () => {
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
      <div className="about-page">
        <div className="about-page-container" id="about">
          <div className="about-page-blob-container">
            <div className="about-page-bkrnd-img">
              <img
                loading="lazy"
                decoding="async"
                src={AboutBkrd}
                alt="bright blue and dark blue blurred blob"
              />
            </div>
          </div>
          <div className="about-page-left">
            <div className="about-page-img-container">
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
          <div className="about-page-info-container">
            <h2 className="about-page-header">
              About <br /> HekaTek
            </h2>
            <div className="about-page-indent">
              <p className="about-page-p">
                Empowering Small Businesses With Websites That Truly Work At
                HekaTek, we’re more than just web developers—we’re advocates for
                small businesses. Over the past six years, we’ve seen far too
                many small businesses struggle with outdated, poorly designed
                websites or overpriced solutions that fail to deliver results.
                These sites not only hurt their online presence but also limit
                their growth.
                <br />
                As a community-driven, woman-owned business, we’re passionate
                about changing that narrative. Our mission is to provide small
                business owners with affordable, expertly crafted websites that
                are modern, secure, and designed to help them succeed. We
                believe every small business deserves a website they can be
                proud of, one that drives results without breaking the bank. Let
                us help you build a powerful online presence so your business
                can thrive in the digital world!
              </p>
              <Button
                text={"Schedule a Meeting"}
                onClick={openCalendlyPopup}
                btnType={"solid"}
                width={"short"}
              />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="about-our-process"
        initial={{opacity: 0, y: 50}} // Start off-screen and faded
        whileInView={{opacity: 1, y: 0}} // Animate into view
        viewport={{once: true, amount: 0.3}} // Trigger when 30% is in view and animate only once
        transition={{duration: 0.8, ease: "easeOut"}} // Control animation duration and easing
      >
        <OurProcess />
      </motion.div>
      <WhyWeCare />
      <WhyChooseUs />
    </>
  )
}

export default AboutPage
