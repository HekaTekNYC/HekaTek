import React, {useState, useEffect, lazy, Suspense} from "react"
import Modal from "../../components/calendly-modal/Modal"
import Button from "../../components/button/Button"

import "./hero-section.scss"

const VideoComponent = lazy(() => import("../../components/video/Video"))

const HeroSection = () => {
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
          <div className="hero-top">
            <h1>
              ENVISION
              <br />
              Innovate
              <br />
              Transform
            </h1>
            <p className="hero-subheader">
              Unleash the full potential of your online presence with a
              custom-coded website, tailored exclusively for your business.
            </p>
            <Button
              text={"Schedule a Meeting"}
              onClick={openCalendlyPopup}
              btnType={"solid"}
              width={"short"}
            />
          </div>
          <div className="hero-under">
            <div className="hero-video-container">
              <Suspense fallback={<div>Loading...</div>}>
                <VideoComponent
                  src={
                    "https://ik.imagekit.io/snjtzh7cg/Hekatek/abstract-hero-og.mp4?updatedAt=1723124823587"
                  }
                  alt={"abstract purple design"}
                  width="1920"
                  height="1080"
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
