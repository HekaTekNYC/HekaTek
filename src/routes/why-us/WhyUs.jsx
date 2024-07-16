import React, {useState, useEffect} from "react" // Added missing imports

import Modal from "../../components/calendly-modal/Modal"
import Button from "../../components/button/Button"
import TechCircle from "../../components/tech-circle/Tech-circle"
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
        <div className="why-left">
          <div className="why-us-bkrnd">
            <img src={WhyBkrnd} alt="gradient blur colored blob" />
          </div>
          <div className="tech-circle">
            <TechCircle />
          </div>
        </div>
        <div className="why-info-container">
          <h2 className="why-header">
            Why <br /> HekaTek
          </h2>
          <div className="why-info-text">
            <h4>Tired of Poor Website Experiences?</h4>
            <p className="why-p">
              Investing in a website can be daunting, especially for small
              businesses. Many invest a significant amount upfront, only to be
              disappointed by slow loading times, overused templates, and
              inconsistent displays. This harms visitor experience and your
              brand reputation.
            </p>
            <h4>You Deserve Better</h4>
            <p className="why-p">
              We’ve seen this frustration firsthand. You deserve a professional,
              hand-coded website that truly represents your brand without
              breaking the bank. That’s why we decided to do things differently.
            </p>
            <h4>Our Solution </h4>
            <p className="why-p">
              Get a high-quality, custom-coded website starting at $150 a month,
              providing confidence in your investment. This gives you a fast,
              unique, and reliable online presence. Prefer a one-time payment?
              We offer a lump sum option as well.
            </p>
          </div>

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
