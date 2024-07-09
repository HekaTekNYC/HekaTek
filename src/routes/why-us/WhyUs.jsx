import React, {useState, useEffect} from "react" // Added missing imports
import {
  firstRowIcons,
  secondRowIcons,
  thirdRowIcons,
  fourthRowIcons,
} from "../../data/TechData"
import Modal from "../../components/calendly-modal/Modal"
import Button from "../../components/button/Button"
import HexagonIcon from "../../components/hexagon-icon/HexagonIcon"

import WhyBkrnd from "../../assets/images/why-gradient.png"

import "./why-us.scss"

const WhyUs = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const checkCookies = () => {
      document.cookie = "testcookie"
      if (!document.cookie.includes("testcookie")) {
        setModalOpen(true) // Show modal if cookies are disabled
      }
    }

    checkCookies()
  }, [])

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleModalConfirm = () => {
    window.location.href = "https://calendly.com/hekateknyc" // Redirect user to Calendly
  }

  const renderIcons = icons => (
    <>
      {icons.map((icon, index) => (
        <HexagonIcon
          icon={icon}
          key={`icon-${index}`}
          loading="lazy"
          decoding="async"
        />
      ))}
    </>
  )

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
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
      />

      <div className="why-us-container">
        <div className="tech-stack-container">
          <div className="why-us-bkrnd">
            <img src={WhyBkrnd} alt="gradient blur colored blob" />
          </div>
          <div className="tech-icons-container">
            <div className="tech-row-1">{renderIcons(firstRowIcons)}</div>
            <div className="tech-row-2">{renderIcons(secondRowIcons)}</div>
            <div className="tech-row-3">{renderIcons(thirdRowIcons)}</div>
            <div className="tech-row-4">{renderIcons(fourthRowIcons)}</div>
          </div>
        </div>
        <div className="why-info-container">
          <h2 className="why-header">
            Why <br /> HekaTek
          </h2>
          <h4 className="why-subheader">
            We view each project as a partnership and go beyond just meeting
            requirements.
          </h4>

          <p className="why-p">
            Understanding the reluctance of small businesses to invest heavily
            upfront in a websites, especially considering the risk of receiving
            subpar results, is key to our approach. We get being let down by
            previous experiences and understand the frustration it causes.
            That's why we've introduced a flexible pricing option starting at
            $175 per month, ensuring affordability without compromising on
            quality. We strive to provide a trustworthy solution where
            businesses can feel confident in getting a website that truly
            represents their brand, without the financial strain or uncertainty
            of traditional models.
          </p>

          <Button
            text={"Schedule A Meeting"}
            onClick={openCalendlyPopup}
            btnType={"solid"}
            width={"short"}
          />
        </div>
      </div>
    </>
  )
}

export default WhyUs
