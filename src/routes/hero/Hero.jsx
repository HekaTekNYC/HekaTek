import React, {useState, useEffect} from "react"
import Modal from "../../components/calendly-modal/Modal"
import Button from "../../components/button/Button"
import VideoComponent from "../../components/video/Video"

import "./hero.scss"

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const checkCookies = () => {
      document.cookie = "testcookie"
      if (!document.cookie.includes("testcookie")) {
        setModalOpen(true)
      }
    }

    checkCookies()
  }, [])

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleModalConfirm = () => {
    window.location.href = "https://calendly.com/hekateknyc"
  }

  const openCalendlyPopup = () => {
    Calendly.initPopupWidget({
      url: "https://calendly.com/hekatek-hekateknyc/30min",
    })
    return false
  }
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
      />
      <div className="hero-format">
        <div className="hero-container">
          <div className="hero-left">
            <div className="test-font">This is my test font</div>
            <h1>
              ENVISION
              <br />
              Innovate
              <br />
              Transform
            </h1>
            <h4>
              Unleash the full potential of your online presence with a
              custom-coded website, tailored exclusively for your business.
            </h4>
            <Button
              text={"Schedule A Meeting"}
              onClick={openCalendlyPopup}
              btnType={"solid"}
              width={"short"}
            />
          </div>
          <div className="hero-right">
            <div className="hero-video-container">
              <VideoComponent
                src={
                  "https://res.cloudinary.com/daecnx7ih/video/upload/v1721843387/AdobeStock_602341088_pmbaiv.mp4"
                }
                alt={"abstract purple design"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
